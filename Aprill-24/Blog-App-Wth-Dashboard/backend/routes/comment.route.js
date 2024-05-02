import express from 'express';
import { verifyToken } from '../utils/varifyUser.js';
const router = express.Router();
import { createComment } from '../controller/comment.controller.js'
router.post('/create', verifyToken, createComment);

export default router;