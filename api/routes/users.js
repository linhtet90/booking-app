import express from 'express';
import { updateUserController, deleteUserController, getAllUsersController, getUserByIdController } from '../controllers/users.js'

const router = express.Router();

router.put('/:id', updateUserController);

router.delete('/:id', deleteUserController);

router.get('/', getAllUsersController);

router.get('/:id', getUserByIdController);

export default router;