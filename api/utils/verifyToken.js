import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return next(createError(401, 'You are not authenticated!'));
	}

	jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
		//invalid token
		if (err) {
			return next(createError(403, 'Invalid token!'));
		}

		req.user = decoded;
		next();
	});
};

export const verifyUser = (req, res, next) => {
	if (req.user.id == req.params.id || req.user.isAdmin) {
		next();
	} else {
		return next(createError(403, 'You are not authorized!'));
	}
};

export const verifyAdmin = (req, res, next) => {
	if (req.user.isAdmin) {
		next();
	} else {
		return next(createError(403, 'You are not authorized!'));
	}
};
