import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '../backend/routes/user.route.js';
import authRoutes from '../backend/routes/auth.route.js'
import postRoutes from '../backend/routes/adminPost.route.js'
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js'
import path from 'path'


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

const __dirname = path.resolve();

//Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/adminPost', postRoutes);
app.use('/api/comment', commentRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
