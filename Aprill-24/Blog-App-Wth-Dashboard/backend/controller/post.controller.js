import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js"

export const create = async (req, res, next) => {

    //isAdmin will checked from cookie so we req from user not from body.
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }

    if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Please provide all required fields'))
    }

    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/ [^a-zA-Z0-9]/g, '-');
    console.log(req.user.id);
    console.log(req.user.userId);
    // when worked with backend we get the id from the cookis by using user.userId but when we did it from frontend we need user.id
    const newPost = new Post({ ...req.body, slug, userId: req.user.userId });
    try {

        if (newPost === null) {
            return next(errorHandler(400, 'You wanted to submit empty post'))
        }
        const savePost = await newPost.save();
        res.status(200).json(savePost)

    } catch (error) {
        next(error);
    }
}