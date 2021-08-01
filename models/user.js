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
    wishList:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Product"
    }],
    cartList:[
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true
            },
            size: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            }        
        }
    ],
    orders: [
        {
            orderId:{
                type: mongoose.Schema.Types.ObjectId,
                required: [true, "order id not present in user order"]
            },
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                required: true
            }
        }
    ]
})

const User = mongoose.model("User", userSchema);

export default User;