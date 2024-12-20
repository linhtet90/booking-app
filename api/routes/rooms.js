import express from "express";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";
import {
	createRoomController,
	updateRoomController,
	deleteRoomController,
	getAllRoomsController,
	getRoomByIdController,
} from "../controllers/rooms.js";

const router = express.Router();

router.post("/", verifyToken, verifyAdmin, createRoomController);

router.put("/:id", verifyToken, verifyAdmin, updateRoomController);

router.delete("/:id", verifyToken, verifyAdmin, deleteRoomController);

router.get("/", getAllRoomsController);

router.get("/:id", getRoomByIdController);

export default router;
