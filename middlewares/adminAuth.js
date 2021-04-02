import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const adminAuth = async (req, res, next) => {

   try {
   const token = req.headers.authorization.split(" ")[1];
      if(token){
         let decodedData;
         decodedData = jwt.verify(token, process.env.JWT_SECRET);
         }  
   } catch (error) {
       console.log(error.message);
   }
};