import express from "express";
import {
	updateUserController,
	deleteUserController,
	getAllUsersController,
	getUserByIdController,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get('/check-authentication', verifyToken, (req, res, next) => {
//     res.send('You are authenticated!');
// })

// router.get('/verify-user/:id', verifyToken, verifyUser, (req, res, next) => {
//     res.send('You can edit your profile!');
// })

// router.get('/verify-admin', verifyToken, verifyAdmin, (req, res, next) => {
//     res.send('You are admin');
// })

router.put("/:id", verifyToken, verifyUser, updateUserController);

router.delete("/:id", verifyToken, verifyUser, deleteUserController);

router.get("/", verifyToken, verifyAdmin, getAllUsersController);

router.get("/:id", verifyToken, verifyUser, getUserByIdController);

export default router;
