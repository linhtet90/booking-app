import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data) => {
    const user = prisma.users.create({
        data
    });

    return user;
}

export const getUserByUsername = async (username) => {
    const user = prisma.users.findUnique({
        where: {
            username
        }
    })

    return user;
}