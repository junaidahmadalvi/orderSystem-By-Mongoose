const mongoose = require("mongoose");
// const validator = require("validator");


const customerScheme = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Email :{
        type : String,
        required:true,
        unique : [true , " Email already present"],
    },
    Phone :{
        type : String, 
        required:true,
        
    },
    
    Address :{
        type :String,
        required : true
    }

})


// Email :{
//     type : String, 
//     required:true,
//     unique : [true , " Email already present"],
//     validator(value){
//         if(!validator.isEmail(value)){
//             throw  new Error("INVALID EMAIL");
//         }
//     }
// }





// <============create collection============>
const Customer = new mongoose.model("customer",customerScheme);

module.exports=Customer