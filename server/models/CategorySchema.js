import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

const category=mongoose.model('category',categorySchema);

export default category;