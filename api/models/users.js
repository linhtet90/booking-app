import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async data => {
	const user = prisma.users.create({
		data
	});

	return user;
};

export const updateUser = async (id, data) => {
	const user = await prisma.users.update({
		where: {
			id
		},
		data
	});

	return user;
};

export const deleteUser = async id => {
	await prisma.users.delete({
		where: {
			id
		}
	});
};

export const getAllUsers = async () => {
	const users = await prisma.users.findMany();
	return users;
};

export const getUserById = async id => {
	const user = await prisma.users.findUnique({
		where: {
			id
		}
	});
	return user;
};

export const getUserByUsername = async username => {
	const user = prisma.users.findUnique({
		where: {
			username
		}
	});

	return user;
};
