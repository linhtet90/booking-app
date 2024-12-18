import express from 'express';
import { createHotelController, updateHotelController, deleteHotelController, getAllHotelsController, getHotelByIdController } from '../controllers/hotels.js'


const router = express.Router();

router.post('/', createHotelController);

router.put('/:id', updateHotelController);

router.delete('/:id', deleteHotelController);

router.get('/', getAllHotelsController);

router.get('/:id', getHotelByIdController);

export default router;