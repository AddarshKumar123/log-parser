const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    service:{
        type:String
    },
    severity:{
        type:String
    },
    message:{
        type:String
    },
    stack:{
        type:String
    },
    endpoint:{
        type:String
    },
    line:{
        type:Number
    },
    col:{
        type:Number
    },
    timestamp:{
        type:String
    }

})

const logModel=mongoose.model("Logs",logSchema);
module.exports=logModel;
