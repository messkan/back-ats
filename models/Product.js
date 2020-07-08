const mongoose = require("mongoose"); 

const productSchema = mongoose.Schema({
    color : { type : String }, 
    category : { type : String }, 
    productName : { type : String }, 
    price : { type : Number}, 
    description : { type: String },
    tag : { type: String },
    imageUrl : { type: String }, 
    reviews : [ { 
        rating: { type : Number},
        content : { type : String }
    }]
});

module.exports= mongoose.model('Product' , productSchema);