import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { createError } from "../util/error.js";
import { createUser, getUserByUsername } from '../models/users.js'

dotenv.config();

export const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);

        const data = {
            username,
            email,
            password: hash
        }

        await createUser(data);
        res.status(200).send('User has been created');
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await getUserByUsername(username);
        if (!user) {
            return next(createError(404, 'User not found!'));
        }

        //Destructure user
        const { id, password: hash, isAdmin, ...others } = user;

        const isPasswordCorrect = await bcrypt.compare(password, hash);
        if (!isPasswordCorrect) {
            return next(createError(400, 'Wrong username or password!'));
        }

        const token = jwt.sign({ id, isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others);
    } catch (error) {
        next(error);
    }
}