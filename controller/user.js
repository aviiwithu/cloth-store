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
        res.status(200).json({
            status: "success",
            data: allUser
        });
        
    } catch (error) {
        res.status(200).json({
            status: "Error",
            message: error.message
        });
    }

}
export const getUserById= async(req, res)=>{
    const {id} = req.params;
    try {
        const userById = await User.findById(id);
        if(!userById) return res.status(400).json({status:"Error",message:"user does not exist"});
        res.status(200).json({
            status: "success",
            data: userById
        });
        
    } catch (error) {
        res.status(202).json({
            status: "Error",
            message: error.message
        });
    }
}
export const deleteUserById = async(req,res)=>{
    const{id} = req.params;
    try {
        const oldUser = await User.findById(id);
        if(!oldUser) return res.status(400).json({message:"user does not exist"});
        await User.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            message: "user deleted successfully"});

    } catch (error) {
        res.status(202).json({
            status: "Error",
            message: error.message
        });
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
        res.status(200).json({
            status:"success",
            email:matchUser.email,
            userid:matchUser._id,
            token
            })
    } catch (error) {
        res.status(202).json({
            status: "Error",
            message: error.message
        });
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

// CART OPERATION STARTS HERE
export const getUserCart = async(req,res)=>{
    try {
        const user = await User.findById(req.userid).populate({
            path: 'cartList',
                populate:{
                    path: 'itemId',
                    model: 'Product'
                }
        });
        res.status(200).json({
            status: "success",
            data: user.cartList
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }
}

export const addtoCart =async(req,res)=>{
    const {itemId, quantity, size, color} = req.body;
    try {
        const user = await User.findById(req.userid);
         
        const checkItem = user.cartList.find(elem=>elem.itemId==itemId);

        if(checkItem) return res.status(404).json({ status: "Error", message: "Product already in cart"})

        user.cartList.push({itemId, quantity, size, color});

        await user.save();

         res.status(200).json({
             status: "success",
             data: user.cartList
         });
        
    } catch (error) {
        res.status(400).json({
            status:"Error",
            message: error.message
        })        
    }
}

export const deleteCartProduct= async(req,res)=>{
    const {itemId } = req.body;
    try {

        const user = await User.findById(req.userid);
        const checkItem = user.cartList.find(elem=>elem.itemId==itemId);
        if(!checkItem) return res.status(400).json({ status: "Error", message: "so such product in cart"});
        user.cartList = user.cartList.filter(elem=>elem.itemId!=itemId)

        await user.save();

        res.status(200).json({
            status: "success",
            data: user.cartList
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }

}

export const updateCartItem= async(req,res)=>{
    const {itemId, size, color, quantity} = req.body;
    try {
        const user = await User.findById(req.userid);
        const matchItem = user.cartList.find(elem=>elem.itemId==itemId);
        if(!matchItem) return res.status(200).json({status: "Error", message: "item not found in cart"});
        matchItem.size = size||matchItem.size;
        matchItem.color = color||matchItem.color;
        matchItem.quantity = quantity||matchItem.quantity;
        
        await user.save();

        res.status(200).json({
            status: "success",
            data: user.cartList
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }
}

// CART OPERATIONS ENDS HERE
//--------------------------------------------------------------------------------------------

// WISHLIST START

export const getWishlist=async(req,res)=>{
    try {
        const user = await User.findById(req.userid).populate('wishList');

        res.status(200).json({
            status: "success",
            result: user.wishList.length,
            data: user.wishList
        })        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }
}

export const addtoWishlist=async(req,res)=>{
    const {product} = req.body;
    try {
        const user = await User.findById(req.userid);
        
        const matchItem = user.wishList.find(item=>item==product);
        if(matchItem) return res.status(400).json({status: "Error", message: "Item already in wishlist"})
        user.wishList.push(product);

        await user.save();

        res.status(200).json({
            status: "success",
            result: user.wishList.length,
            data: user.wishList
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }
}

export const deleteWishlist = async(req,res)=>{
    const{product} = req.body;
    try {
        const user = await User.findById(req.userid);
        const matchItem = user.wishList.find(item=>item==product);
        if(!matchItem) return res.status(400).json({status: "Error", message: "No such item in wishlist"});
        user.wishList=user.wishList.filter(el=>el!=product);

        await user.save();
        res.status(200).json({
            status: "success",
            result: user.wishList.length,
            data: user.wishList
        })     
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: error.message
        })
    }
}

// WISHLIST OPERATION ENDS HERE
//--------------------------------------------------------------------------------------------------