const mongoose = require("mongoose");
// const validator = require("validator");


const orderScheme = new mongoose.Schema({
    CustomerId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'customer' ,
        required: true

    },
    ProductId:{
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'product' ,
        required: true

    },
    TotalPrice:{
        type :Number,
        required : true
    },
    Date:{
        type: Date,
        required: true
    },
    
    Review:{
        type :String,
        required : true
    }

})

// <============create collection============>
const Order = new mongoose.model("order",orderScheme);

module.exports=Order