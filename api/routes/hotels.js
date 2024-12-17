import express from 'express';
import { createHotel, updateHotel, deleteHotel, getAllHotels, getHotelById } from '../models/hotels.js'

const router = express.Router();

router.post('/', (req, res) => {
    const data = req.body;

    createHotel(data)
        .then((hotel) => {
            res.status(201).json(hotel);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;

    const data = req.body;

    updateHotel(id, data)
        .then((hotel) => {
            res.status(200).json(hotel);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    deleteHotel(id)
        .then(() => {
            res.status(200).json("Hotel has been deleted.");
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

router.get('/', (req, res) => {
    getAllHotels()
        .then((hotels) => {
            res.status(200).json(hotels);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    getHotelById(id)
        .then((hotel) => {
            res.status(200).json(hotel);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

export default router;