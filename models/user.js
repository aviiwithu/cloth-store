import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    isAdmin: {
        type:Boolean,
        required: true,
        default: false
    },
    cartList:[
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            productName: {
                type: String,
                required:true
            },
            productImage:{
                type:String,
                required: true
            },
            productPrice:{
                type:Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
})

const User = mongoose.model("User", userSchema);

export default User;