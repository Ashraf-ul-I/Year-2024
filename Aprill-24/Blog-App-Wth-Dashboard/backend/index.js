import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '../backend/routes/user.route.js'
const app = express();

dotenv.config()
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    console.log('Mongodb is connected ')
})

app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
//16ezaJQ8p3IMJMgC