import { createError } from '../utils/error.js';
import { createRoom, updateRoom, deleteRoom, getAllRooms, getRoomById } from '../models/rooms.js';

export const createRoomController = async (req, res, next) => {
    try {
        const data = req.body;
        const room = await createRoom(data);
        res.status(201).json(room);
    } catch (err) {
        next(err);
    }
};

export const updateRoomController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const room = await updateRoom(id, data);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};

export const deleteRoomController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deleteRoom(id);
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getAllRoomsController = async (req, res, next) => {
    try {
        const rooms = await getAllRooms();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

export const getRoomByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const room = await getRoomById(id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};