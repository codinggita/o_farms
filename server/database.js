const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    email:String,
       
    password:String,
        
    }
)

const collection = mongoose.model("custmers",newSchema)

module.exports=collection