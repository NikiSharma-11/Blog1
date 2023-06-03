import express from 'express';
import multer from 'multer';
import { createBlog,displayBlog,deleteBlog } from '../controller/BlogController.js';

const router=express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  
  

//Route 1 create a blog
router.post('/createBlog',upload.single('image'),createBlog);

//Route 2 display blog
router.get('/displayBlog',displayBlog);

//Route 3 delete a blog
router.delete('/deleteBlog/:id',deleteBlog);



export default router;