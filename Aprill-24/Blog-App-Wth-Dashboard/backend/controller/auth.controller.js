import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
    ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
            username: user.username,
            isAdmin: user.isAdmin

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


export const googleAuth = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            // user.profilePicture = googlePhotoUrl;
            //if user existed then only generate the token and login to the page..
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        } else {
            // if user is not exixted them it will save user to the database then created a token for cookie
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashPassword,
                profilePicture: googlePhotoUrl
            })

            await newUser.save();
            const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);

        }

    } catch (error) {
        next(error);
    }
}