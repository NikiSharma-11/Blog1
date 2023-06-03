import mongoose from "mongoose";
import Category from "../models/CategorySchema.js";
import category from "../models/CategorySchema.js";
 
export const createCategory=async(req,res)=>{
    const {name}=req.body;
    try{
        const category=await Category.create({name});
        res.status(200).json(category);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
//Route 2

export const singleCategory=async(req,res)=>{
    const {id}=req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"No such category"})
        }
        const category=await Category.findById(id);
        if(!category){
        return res.status(404).json({erroe:"No such category"})
    }
    res.status(200).json(category);
}
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//Route 3 
export const deleteCategory=async(req, res)=>{
    const {id}=req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"No such category"})
        }
       
        const category=await Category.findOneAndDelete({_id:id})
        res.status(200).json(category);
}
    catch(error){
        res.status(400).json({error:error.message});
    }
}

//Route 4
export const updateCategory=async(req,res)=>{
    const {id}=req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"No such category"})
        }

    const category=await Category.findByIdAndUpdate({_id:id},{...req.body});
    res.status(200).json(category)
}catch(error){
    res.status(400).json({error:error.message});
}
}

//Route 5 Display all category
export const displayAllCategory=async(req,res)=>{
    try{
        const category= await Category.find({});
        res.status(200).json(category);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
   
