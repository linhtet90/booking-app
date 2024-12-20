import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRoom = async data => {
	const room = prisma.rooms.create({
		data
	});

	return room;
};

export const updateRoom = async (id, data) => {
	const room = await prisma.rooms.update({
		where: {
			id
		},
		data
	});

	return room;
};

export const deleteRoom = async id => {
	const room = await prisma.rooms.delete({
		where: {
			id
		}
	});
};

export const getAllRooms = async () => {
	const rooms = await prisma.rooms.findMany();
	return rooms;
};

export const getRoomById = async id => {
	const room = await prisma.rooms.findUnique({
		where: {
			id
		}
	});
	return room;
};
