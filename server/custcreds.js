const express = require("express");
const mongoose = require("mongoose"); // Add require statement for mongoose
const collection = require("./database.js");
const cors = require("cors");
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const Product = require('./product');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const saltRounds = 10;

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/custmercredntionals", { useNewUrlParser: true, useUnifiedTopology: true }) // Add options
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await collection.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Authentication failed" });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Authentication failed" });
        }

        // Password is correct, return success
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Signup route
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        // Check if user with the same email already exists
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Create new user
        const newUser = await collection.create({ email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



//product apicalls 

app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.post('/api/products', async (req, res) => {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
