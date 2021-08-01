import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors';
connectDB();

// importing routes from route folder
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// end routes import

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("<h1>Your app is running now</h1>")
})

// setting routes path
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`app is running at port ${PORT} `);
})