import Product from '../models/product.js';
import User from '../models/user.js';
import Home from '../models/homepage.js';

export const getProducts= async(req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({
            status: "success",
            result: products.length,
            data: products
        });
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message: error.message
        })
    }
}

export const createProduct = async(req,res)=>{
    try {
        const {name, image, thumbImage, category, 
            subCategory, description,
             color, size, price} = req.body;

             const newProduct = new Product({
                            name,
                            image, 
                            thumbImage,
                            category,
                            subCategory,
                            description,
                            color,
                            size,
                            price
                        });

             await newProduct.save();

             res.status(200).json({
                 status: "success",
                 data: newProduct
             });
        
    } catch (error) {
        res.status(201).json({
            status: "Error",
            data : error.message
        })
    }
}
export const getProductById = async(req,res)=>{
    const {id} = req.params;
    try {
       const productById = await Product.findById(id);
       res.status(200).json({
           status: "success",
           data: productById
       });
        
    } catch (error) {
        res.status(201).json({
            status: "Error",
            data : error.message
        })
    }
}
export const deleteProductById= async(req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            message:"product deleted sucessfully"
        });
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message: error.message
        })
    }
}
export const updateProductById = async(req,res)=>{
    const {id} = req.params;
    const product = req.body; 
    try {
        const oldProduct = await Product.findById(id);
        if(!oldProduct) return res.status(404).json({
            status: "Error",
            message: "No such product found"
        });

        const updatedProduct = await Product.findByIdAndUpdate(id, {...product,id}, {new:true});
        res.status(200).json({
            status: "success",
            data : updatedProduct
        });
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message : error.message
        })
    }
}

export const getProductsByCategory= async(req,res)=>{
    const { category} = req.params;
    try {
        const productByCategory = await Product.find({category}).select("-__v");
        res.status(200).json({
            status: "success",
            result: productByCategory.length,
            data: productByCategory
        });
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message : error.message
        })
    }
}

export const getProductsBySubCategory = async(req,res)=>{
    const { subCat, category} = req.params;

    try {
        const productBySubCategory = await Product.find({category,subCategory:subCat})
        res.status(200).json({
            status: "success",
            result: productBySubCategory.length,
            data: productBySubCategory
        });
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message : error.message
        })
    }
}

export const getHomepageProducts = async(req,res)=>{
        
    try{
        const homeproduct = await Home.findOne({}).populate('trending').populate('topRated').populate('explore') ;
        res.status(200).json({
            status: "success",
            data: homeproduct
        })
    }
    catch(error){
        res.status(201).json({
            status: "Error",
            message: error.message
        })
    }
}

export const updateHomeProducts= async(req, res)=>{
    const {trending, topRated, explore} = req.body;
    try {
        const homeproduct = await Home.findOne({}) ;
        if(trending){
            homeproduct.trending.unshift(trending);
            homeproduct.trending.length=4;
        }

        if(topRated){
            homeproduct.topRated.unshift(topRated);
            homeproduct.topRated.length=3;
        }

        if(explore){
            homeproduct.explore.unshift(explore);
            homeproduct.explore.length=4;
        }

        await homeproduct.save();

       res.status(200).json({
           status: "success",
           data: homeproduct
       })
        
    } catch (error) {
        res.status(201).json({
            status: "Error",
            message: error.message
        })
    }
}