const mongoose = require("mongoose");
// const validator = require("validator");


const productScheme = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Price:{
        type: Number,
        required:true

    },
    Description :{
        type : String
    },
    Quantity:{
        type: Number,
        required:true
    },
    Color:{
        type : String
    }
})

// <============create collection============>
const Product = new mongoose.model("product",productScheme);

module.exports=Product