import { createError } from '../util/error.js';
import { createHotel, updateHotel, deleteHotel, getAllHotels, getHotelById } from '../models/hotels.js'

export const createHotelController = (req, res, next) => {
    const data = req.body;

    createHotel(data)
        .then((hotel) => {
            res.status(201).json(hotel);
        })
        .catch((err) => {
            next(err);
        })
}

export const updateHotelController = (req, res, next) => {
    const { id } = req.params;

    const data = req.body;

    updateHotel(id, data)
        .then((hotel) => {
            res.status(200).json(hotel);
        })
        .catch((err) => {
            next(err);
        })
}

export const deleteHotelController = (req, res, next) => {
    const { id } = req.params;

    deleteHotel(id)
        .then(() => {
            res.status(200).json("Hotel has been deleted.");
        })
        .catch((err) => {
            next(err);
        })
}

export const getAllHotelsController = (req, res, next) => {
    getAllHotels()
        .then((hotels) => {
            res.status(200).json(hotels);
        })
        .catch((err) => {
            next(err);
        })
}

export const getHotelByIdController = (req, res, next) => {
    const { id } = req.params;

    getHotelById(id)
        .then((hotel) => {
            res.status(200).json(hotel);
        })
        .catch((err) => {
            next(err);
        })
}