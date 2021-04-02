import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const createUser = async (req,res)=>{
    const {name, email, password} = req.body;
    const userSave = req.body;
    try {
        const oldUser = await User.findOne({email});
        if(oldUser) return res.status(400).json({message:"user already exists"});
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({...userSave,name,email, password:hashedPassword});
        const token = jwt.sign({email:newUser.email, userid:newUser._id}, process.env.JWT_SECRET, {expiresIn:'2h'});
        res.status(202).json({email:newUser.email,userid:newUser._id,token})
    } catch (error) {
        console.log("problem in creating user");
    }
}

export const getAllUser = async(req,res)=>{

    try {
        const allUser = await User.find();
        res.status(202).json(allUser);
        
    } catch (error) {
        console.log(error.message);
    }

}
export const getUserById= async(req, res)=>{
    const {id} = req.params;
    try {
        const userById = await User.findById(id);
        if(!userById) return res.status(400).json({message:"user does not exist"});
        res.status(200).json(userById);
        
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteUserById = async(req,res)=>{
    const{id} = req.params;
    try {
        const oldUser = await User.findById(id);
        if(!oldUser) return res.status(400).json({message:"user does not exist"});
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "user deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const userLogin = async(req,res)=>{
    const { email, password } = req.body;
    try {
        const matchUser = await User.findOne({email});
        if(!matchUser) return res.status(400).json({message:"email does not exist"});
        const matchPassword = await bcrypt.compare(password, matchUser.password );
        if(!matchPassword) return res.status(404).json({message:"password invalid"});
        const token = jwt.sign({email:matchUser.email,userid:matchUser._id}, process.env.JWT_SECRET,{expiresIn:'2h'} );
        res.status(200).json({email:matchUser.email,userid:matchUser._id, token})
    } catch (error) {
        
    }
}

export const getUserCart = async(req,res)=>{
    try {
        const userCart = await User.findById(req.userid);
        res.status(200).json(userCart.cartList)
        
    } catch (error) {
        console.log(error.message);
    }
}

export const adminLogin = async(req,res)=>{
    const { email, password} = req.body;

    try {
        const oldUser = await User.findOne({email, isAdmin:true});
        if(!oldUser) return res.status(400).json({message:"admin does not exists"});
        const passwordCheck = await bcrypt.compare (password, oldUser.password );
        if(!passwordCheck) return res.status(404).json({message:"invalid credentials"});
        const token = jwt.sign({email:oldUser.email, userid:oldUser._id}, process.env.JWT_SECRET, {expiresIn:'2h'} );
        res.status(200).json({email:oldUser.email, userid:oldUser._id, token});
        
    } catch (error) {
        console.log(error.message);
    }
}