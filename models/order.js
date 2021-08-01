import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            productName: { type: String, required: true },
            qty:{ type: Number, required: true, default: 1 },
            color:{ type: String, required: true},
            productImage: { type: String, required: true },
            productPrice: { type: Number, required: true },
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    orderStatus:{
        type: String,
        required: true,
        default: "Received"
    },
    paymentStatus:{
        type: String,
        required: true,
        default: "pending"
    },
    address:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

export default Order;