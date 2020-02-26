import express from 'express';
import {AuthorController} from '../controllers';

const authorRouter = express.Router();

authorRouter.get('/', AuthorController.getAllAuthors);

export default authorRouter;
