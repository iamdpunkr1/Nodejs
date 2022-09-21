const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const recipesSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps:true});

const Recipe=mongoose.model('recipe',recipesSchema);
module.exports=Recipe;