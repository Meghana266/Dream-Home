const mongoose = require("mongoose");
mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        
    }
    password:{
        type:String,
        required:true
    },
});