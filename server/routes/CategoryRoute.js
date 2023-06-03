import express from 'express';
import { createCategory, deleteCategory, updateCategory,singleCategory,displayAllCategory } from '../controller/CategoryController.js';

const router=express.Router();

//Route 1 create category
router.post('/addCategory', createCategory);

//Route 2 Display single category
router.get('/displayCategory/:id', singleCategory);

//Route 3 Delete category
router.delete('/deleteCategory/:id', deleteCategory);

//Route 4 Update category
router.patch('/updateCategory/:id', updateCategory);

//Route 6 display all category
router.get('/displayAllCategory',displayAllCategory)

export default router;