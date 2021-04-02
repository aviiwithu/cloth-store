import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();
export const userAuth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token){
            let decodedData;
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            
            req.userid = decodedData.userid;
        }
        
        next();
    } catch (error) {
        return res.status(404).json({message:"auth failed in middleware"});
    }
}
