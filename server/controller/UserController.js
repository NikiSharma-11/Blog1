import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';



dotenv.config(); 

// Route 1 send signUp data to database
export const userSignUp = async(req, res)=>{
    const{name,email,password}= req.body; //desturucture gareko username email ra password send garnalai
    try{
        const saltRound = 10; //10 ota word add gardine
        const salt = await bcrypt.genSalt(saltRound); //salt ma bhako 10 ota word generate gardine
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.findOne({email});  //yauta matra username use garna paune
        if(user){
            return res.status(400).json({msg:"Email already exists"})
        }
        //create and return JWT token
        const accessToken=jwt.sign({userId:User._id},process.env.SECRET,{expiresIn:"30d"})
        const userData = await User.create({name, email, hashPassword, accessToken});
        
        res.status(200).json({data:userData,accessToken}); //response ma token matra pathauna
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
 //Route 2 Login system
 export const userLogIn = async(req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      // Compare the provided password
      const passwordValid = await bcrypt.compare(password, user.hashPassword);
      if (!passwordValid) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      // Create and return JWT token
      const accessToken = jwt.sign({ userId: user._id }, process.env.SECRET,{expiresIn:"1d"});
      await User.findByIdAndUpdate(user._id,{accessToken})
      res.status(200).json({
        data:{email:user.email,
        role:user.role},
        accessToken
      });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: error.message });
    }
  };