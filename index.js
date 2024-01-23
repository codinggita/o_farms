const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body in requests
app.use(express.json());

// In-memory "database"
let courses = {
  cse: [
    {
      course: "frontend",
      courseId: 1,
      cohort: 10,
      college: "LPU",
      semester: 2,
      averageRating: 0,
      studentsVoted: 0,
    },
    {
      course: "backend",
      courseId: 2,
      cohort: 11,
      college: "GTU",
      semester: 3,
      averageRating: 9.25,
      studentsVoted: 12,
    },
    {
      course: "design",
      courseId: 3,
      cohort: 10,
      college: "LPU",
      semester: 2,
      averageRating: 0,
      studentsVoted: 0,
    },
    {
      course: "dsa",
      courseId: 4,
      cohort: 10,
      college: "VIT",
      semester: 2,
      averageRating: 4,
      studentsVoted: 3,
    },
  ],
};



// In-memory "database" for user credentials
const users = [
  { username: "user1", password: "password1", role: "farmer" },
  { username: "user2", password: "password2", role: "fertilizer_business" },
  { username: "user3", password: "password3", role: "consumer" },
];

// GET - Serve the login page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// POST - Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Successful login
    res.json({ message: "Login successful", role: user.role });
  } else {
    // Failed login
    res.status(401).json({ message: "Invalid credentials" });
  }
});







// In-memory shopping cart
let shoppingCart = [];

// GET - View Cart
app.get("/cart", (req, res) => {
  res.json(shoppingCart);
});

// POST - Add to Cart
app.post("/cart/add", (req, res) => {
  const newItem = req.body;
  shoppingCart.push(newItem);
  res.send("Item added to the cart");
});

// PUT - Update Cart Item
app.put("/cart/update/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const updatedItem = req.body;
  
  // Find the index of the item with the given productId in the cart
  const index = shoppingCart.findIndex(item => item.productId === productId);

  if (index !== -1) {
    shoppingCart[index] = { ...shoppingCart[index], ...updatedItem };
    res.send("Cart item updated");
  } else {
    res.status(404).send("Item not found in the cart");
  }
});


// DELETE - Remove from Cart
app.delete("/cart/remove/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  // Filter out the item with the given productId from the cart
  shoppingCart = shoppingCart.filter(item => item.productId !== productId);

  res.send("Item removed from the cart");
});

// PATCH - Update partial information of an item in the shopping cart
app.patch('/cart/:productId', (req, res) => {
    const productId = req.params.productId;
    const partialUpdate = req.body;
  
    if (cartData[productId]) {
      Object.assign(cartData[productId], partialUpdate);
      res.json({ [productId]: cartData[productId] });
    } else {
      res.status(404).json({ error: 'Item not found in the cart' });
    }
  });
  

// DELETE - Clear Cart
app.delete("/cart/clear", (req, res) => {
  shoppingCart = [];
  res.send("Cart cleared");
});


// POST - Checkout
app.post("/cart/checkout", (req, res) => {
  // Perform checkout process (e.g., handle payment, update inventory, etc.)
  // ...

  // Clear the cart after successful checkout
  shoppingCart = [];

  res.send("Checkout successful. Cart cleared.");
});









// GET - List all courses
app.get("/courses", (req, res) => {
  res.json(courses.cse);
});

// GET - Details of a specific course by name
app.get("/courses/:courseName", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json(course);
  }
});

// GET - Average rating of a specific course
app.get("/courses/:courseName/rating", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    res.json({ averageRating: course.averageRating });
  }
});

// POST - Create a new course
app.post("/courses", (req, res) => {
  courses.cse.push(req.body);
  res.send("Course added");
});

// POST - Add a rating to a course
app.post("/courses/:courseName/rating", (req, res) => {
  const course = courses.cse.find((c) => c.course === req.params.courseName);
  if (!course) {
    res.status(404).send("Course not found");
  } else {
    const rating = req.body.rating;
    course.averageRating =
      (course.averageRating * course.studentsVoted + rating) /
      (course.studentsVoted + 1);
    course.studentsVoted++;
    res.send("Rating updated");
  }
});

// PUT - Modify information of a course
app.put("/courses/:courseName", (req, res) => {
  const index = courses.cse.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    courses.cse[index] = { ...courses.cse[index], ...req.body };
    res.send("Course updated");
  }
});

// PATCH - Update partial information of a course
app.patch("/courses/:courseName", (req, res) => {
  const index = courses.cse.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    const courseToUpdate = courses.cse[index];
    // Update specific fields if they exist in the request body
    if (req.body.cohort) courseToUpdate.cohort = req.body.cohort;
    if (req.body.college) courseToUpdate.college = req.body.college;
    if (req.body.semester) courseToUpdate.semester = req.body.semester;

    res.send("Course partially updated");
  }
});

// DELETE - Remove a course by name
app.delete("/courses/:courseName", (req, res) => {
  const index = courses.cse.findIndex(
    (c) => c.course === req.params.courseName
  );
  if (index === -1) {
    res.status(404).send("Course not found");
  } else {
    courses.cse.splice(index, 1);
    res.send("Course deleted");
  }
});



app.get("/*", (req, res) => {
  res.send("You are on worng route. Here's the list of possible routes");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});