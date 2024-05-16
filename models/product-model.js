const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discout:
    {
        type:String,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolro:String

})
module.exports=mongoose.model("products",productSchema)