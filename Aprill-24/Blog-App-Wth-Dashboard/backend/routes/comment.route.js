import express from 'express';
import { verifyToken } from '../utils/varifyUser.js';
const router = express.Router();
import { createComment, getPostComments, likeComment } from '../controller/comment.controller.js'
router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments)
router.put('/likeComment/:commentId', verifyToken, likeComment);

export default router;