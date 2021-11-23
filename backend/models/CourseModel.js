const mongoose = require('mongoose');

const schema = mongoose.Schema({
    coach : {type : String,required : true},
    courseName : {type : String,required : true},
    price : {type : Number , required:true},
    dateBegin : {type : Date,required: true},
    dateEnd : {type : Date,required : true},
    nbLimite : {type :Number,required:true},
    users : [{
        type : mongoose.SchemaTypes.ObjectId,ref:'users'
    }]
})

module.exports = mongoose.model("courses",schema);