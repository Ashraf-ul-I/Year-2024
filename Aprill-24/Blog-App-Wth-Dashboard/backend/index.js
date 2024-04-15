import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '../backend/routes/user.route.js';
import authRoutes from '../backend/routes/auth.route.js'
import cookieParser from 'cookie-parser';

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
//error middlewares 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Sever Error";
    res.status(statusCode).json({
        success: false,
        statusCode, message
    });
})


dotenv.config()
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    console.log('Mongodb is connected ')
})

//Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
//16ezaJQ8p3IMJMgC