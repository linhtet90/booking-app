import express from 'express';
import {
	createHotelController,
	updateHotelController,
	deleteHotelController,
	getAllHotelsController,
	getHotelByIdController
} from '../controllers/hotels.js';
import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, verifyAdmin, createHotelController);

router.put('/:id', verifyToken, verifyAdmin, updateHotelController);

router.delete('/:id', verifyToken, verifyAdmin, deleteHotelController);

router.get('/', getAllHotelsController);

router.get('/:id', getHotelByIdController);

export default router;
