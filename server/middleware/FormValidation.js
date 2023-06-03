import Joi from 'joi';


const validationSchema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8) .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/) 
    .required() 
    .messages({ 'string.min': 'Password must be at least 8 characters long', 
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character', 
    'any.required': 'Password is required' }),
   
})

export const validationForm=(req, res, next)=>{
    const {error}=validationSchema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message})

    }
    next();
}