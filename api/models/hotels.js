import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createHotel = async data => {
	const hotel = await prisma.hotels.create({
		data
	});

	return hotel;
};

export const updateHotel = async (id, data) => {
	const hotel = await prisma.hotels.update({
		where: {
			id
		},
		data
	});

	return hotel;
};

export const deleteHotel = async id => {
	await prisma.hotels.delete({
		where: {
			id
		}
	});
};

export const getAllHotels = async () => {
	const hotels = await prisma.hotels.findMany({
		include: {
			rooms: true
		}
	});
	return hotels;
};

export const getHotelById = async id => {
	const hotel = await prisma.hotels.findUnique({
		where: {
			id
		},
		include: {
			rooms: true
		}
	});
	return hotel;
};
