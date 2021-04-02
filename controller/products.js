import Product from '../models/product.js';
import User from '../models/user.js';

export const getProducts= async(req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async(req,res)=>{
    try {
        const {name, image, thumbImage, category, 
            subCategory, description,
             color, size, price} = req.body;

             const newProduct = new Product({
                 name, image, thumbImage,category,subCategory,
                 description, color, size, price
             });

             await newProduct.save();

             res.status(200).json(newProduct);
        
    } catch (error) {
        console.log(error.message);
    }
}
export const getProductById = async(req,res)=>{
    const {id} = req.params;
    try {
       const productById = await Product.findById(id);
       res.status(200).json(productById);
        
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteProductById= async(req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json("product deleted successfully");
    } catch (error) {
        console.log(error.message);
    }
}
export const updateProductById = async(req,res)=>{
    const {id} = req.params;
    const product = req.body; 
    try {
        const oldProduct = await Product.findById(id);
        if(!oldProduct) return res.status(404).json("no such product is available");

        const updatedProduct = await Product.findByIdAndUpdate(id, {...product,id}, {new:true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getProductsByCategory= async(req,res)=>{
    const { category} = req.params;
    try {
        const productByCategory = await Product.find({category});
        res.status(200).json(productByCategory);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductsBySubCategory = async(req,res)=>{
    const { subCat} = req.params;
    try {
        const productBySubCategory = await Product.find({subCategory:subCat})
        res.status(200).json(productBySubCategory);
    } catch (error) {
        console.log(error.message);
    }
}