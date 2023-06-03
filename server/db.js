import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const mongoURI=process.env.MONGOURI;

const connectDB=()=>{
    try{
        mongoose.connect(mongoURI);
        console.log("Connected to database");
    }
    catch(error){
        console.log("Error",error)
    }
}

export default connectDB;
