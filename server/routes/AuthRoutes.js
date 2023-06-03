import express from 'express';
import { userSignUp, userLogIn } from '../controller/UserController.js';
import { validationForm } from '../middleware/FormValidation.js';

const router=express.Router();

//Route 1 SignUp
router.post('/signUp',validationForm,userSignUp);

//Route 2 LogIn
router.post('/login', userLogIn);

export default router;