import mongoose from 'mongoose';

const homeSchema = mongoose.Schema({

    explore:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "Product"
    },
    trending:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "Product"
    },
    topRated:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: "Product"
    }

})

const Homeproduct = mongoose.model('homeproduct',homeSchema);

export default Homeproduct;