const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  },
  username: {type : String,required : true},
  password: {type : String,required : true},
  subscription: [{
      dateBegin : {type:Date,required : false,default : Date.now()},
      dateEnd : {type:Date,required: false},
      period : {type : Number,enum : [1,3,6,9],required:false}
    }]
});
schema.pre('save',(next) => {
  this.dateEnd = this.dateBegin
})
module.exports = mongoose.model("users",schema);