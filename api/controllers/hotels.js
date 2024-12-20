import { createError } from "../utils/error.js";
import {
	createHotel,
	updateHotel,
	deleteHotel,
	getAllHotels,
	getHotelById,
} from "../models/hotels.js";

export const createHotelController = async (req, res, next) => {
	try {
		const data = req.body;
		const hotel = await createHotel(data);
		res.status(201).json(hotel);
	} catch (err) {
		next(err);
	}
};

export const updateHotelController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const hotel = await updateHotel(id, data);
		res.status(200).json(hotel);
	} catch (err) {
		next(err);
	}
};

export const deleteHotelController = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteHotel(id);
		res.status(200).json("Hotel has been deleted.");
	} catch (err) {
		next(err);
	}
};

export const getAllHotelsController = async (req, res, next) => {
	try {
		const hotels = await getAllHotels();
		res.status(200).json(hotels);
	} catch (err) {
		next(err);
	}
};

export const getHotelByIdController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const hotel = await getHotelById(id);
		res.status(200).json(hotel);
	} catch (err) {
		next(err);
	}
};
