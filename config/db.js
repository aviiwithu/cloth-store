import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        } )
        console.log(`connected to  database at ${connection.connection.host}`);
    } catch (error) {
        console.log(`database not connected ${error.message}`)
    }
}

export default connectDB;