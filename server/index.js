import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db.js';
import AuthRoutes from './routes/AuthRoutes.js';
import CategoryRoute from './routes/CategoryRoute.js';
import BlogRoute from './routes/BlogRoutes.js';
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));
app.use('/api',AuthRoutes);
app.use('/api',CategoryRoute);
app.use('/api',BlogRoute);


dotenv.config();
connectDB();

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`App is listining at ${port}`)


})