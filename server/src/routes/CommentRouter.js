import express from 'express';
import CommentController from "../controllers/CommentController";

const commentRouter = express.Router();

commentRouter.post('/', CommentController.createComment);
commentRouter.get('/:id', CommentController.getComment);
commentRouter.put('/:id', CommentController.updateComment);
commentRouter.delete('/:id', CommentController.deleteComment);

export default commentRouter;
