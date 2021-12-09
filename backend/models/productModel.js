const mongoose = require('mongoose')

const schema = mongoose.Schema({
    productName : {type: String, required : true},
    quantity : {type: Number, required:true},
    price : {type: Number, required:true}
});
module.exports = mongoose.model('product',schema);