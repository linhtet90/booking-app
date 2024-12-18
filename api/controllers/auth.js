import bcrypt from 'bcrypt';
import { createError } from "../util/error.js";
import { createUser } from '../models/users.js'

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