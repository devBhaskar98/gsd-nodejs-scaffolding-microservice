import express from 'express';
import gsdController from '../controllers/gsdController.js';

const router = express.Router();

router.get('/:id', gsdController.getUser);

// router.post('', userController.postUser);

export default router;