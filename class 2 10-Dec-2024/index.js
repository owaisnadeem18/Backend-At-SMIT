const express = require("express")

const saad = express();

// saad.get("/" , function(req , res) {
            // Syntax 
// } )

// Revision of MiddleWares 

saad.get("/" , (req , res) => {
    res.send("Class 02 of express js ")
})

// saad.get("/profile" , middleware , (req , res) => {

// })  // Syntax

saad.get("/profile" , (req , res , next) => {
  console.log("My name is Owais")  
  next();
} , (req , res) => {
    res.send("I am profile route in which we also have the use of middlewares inside it ")
})

saad.listen(4002)

