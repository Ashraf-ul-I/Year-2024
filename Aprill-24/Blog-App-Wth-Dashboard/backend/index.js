import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express();

dotenv.config()
mongoose.connect(
    process.env.MONGODB_URI
).then(() => {
    console.log('Mongodb is connected ')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
//16ezaJQ8p3IMJMgC