import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    thumbImage:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;