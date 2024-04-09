import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        // return res.status(400).json({ message: "All Fields are required" });

        next(errorHandler(400, "All fields are required"))
    }
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username, email, password: hashPassword
    })

    try {
        await newUser.save();
        res.json("Signup Successfull")

    } catch (error) {
        next(error);
    }


}

//SIGNIN 

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, "All fields are required"))
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(400, 'User not found'))
        }

        const validPassword = bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid Password'))
        }

        const token = jwt.sign({
            userId: user._id,
            username: user.username
        },
            process.env.JWT_SECRET,
            { expiresIn: '10d' }
        );
        const { password: pass, ...rest } = user._doc //this is uses for not getting the password after signin for security

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest);

    } catch (error) {
        next(error);
    }

}