import mongoose from 'mongoose';

export const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"product must have a name"]
    },
    image: {
        type: String,
        required: [true, "please add product image"],
    },
    thumbImage:{
        type: String,
        required: [true, "please add thumbnail image"]
    },
    category: {
        type: String,
        required: [true, "product must belong to a category"]
    },
    subCategory:{
        type: String,
        required: [true, "please mention sub category"]
    },
    description: {
        type: String,
        required: [true, "enter product description"]
    },
    color:{
        type: String,
        required: [true," product color cannot be empty"]
    },
    size:{
        type: Number,
        required: [true, "product must have a size"]
    },
    price:{
        type: Number,
        required: [true, "product cannot be saved without price"]
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;