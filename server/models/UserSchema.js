import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        require:true,
        unique:true
    },
    hashPassword:{
        type:String,
        required:true
    }
})

const user=mongoose.model('user',userSchema);
export default user;