import { createError } from '../utils/error.js';
import { updateUser, deleteUser, getAllUsers, getUserById } from '../models/users.js';

export const updateUserController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const data = req.body;
		const user = await updateUser(id, data);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

export const deleteUserController = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteUser(id);
		res.status(200).json('User has been deleted.');
	} catch (err) {
		next(err);
	}
};

export const getAllUsersController = async (req, res, next) => {
	try {
		const users = await getAllUsers();
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};

export const getUserByIdController = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await getUserById(id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};
