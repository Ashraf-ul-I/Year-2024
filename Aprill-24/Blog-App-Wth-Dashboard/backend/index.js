import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '../backend/routes/user.route.js';
import authRoutes from '../backend/routes/auth.route.js'
const app = express();

app.use(express.json());

dotenv.config()
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    console.log('Mongodb is connected ')
})

//Routes
app.use('/api/user', userRoutes);
app.use('/api/user', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
//16ezaJQ8p3IMJMgC