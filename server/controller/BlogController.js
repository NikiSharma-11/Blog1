import Blog from '../models/BlogSchema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Category from '../models/CategorySchema.js';
import mongoose from 'mongoose';

dotenv.config();
//Route 1 create blog
export const createBlog=async(req,res)=>{
    const {title,slug,image,description,categoryData,user}=req.body;
    const {filename}=req.file;
    const data = jwt.verify(user,process.env.SECRET);
    const author=data.userId;
    const info=await Category.findOne({name:categoryData});
    const category=info._id;
    try{
        const blog=await Blog.create({title,slug,image:filename,description,category,author});
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//Route 2 display all blog
export const displayBlog=async(req,res)=>{
    try{
        const blog=await Blog.find({});
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//Route 3 Delete Blog
export const deleteBlog=async(req, res)=>{
    const {id}=req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"No such blog"})
        }
       
        const blog=await Blog.findOneAndDelete({_id:id})
        res.status(200).json(blog);
}
    catch(error){
        res.status(400).json({error:error.message});
    }
}