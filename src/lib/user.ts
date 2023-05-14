import { User } from '@prisma/client';
import prisma from './prisma';

interface UserInput {
    username: string;
    email: string;
    password: string;
}

export const findUserByUsername = async (username: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const findUserByLogin = async (login: string): Promise<User | null> => {
    return prisma.user.findFirst({
        where: {
            OR: [
                {
                    username: login
                },
                {
                    email: login
                }
            ]
        }
    })
}

export const findUserById = async (id: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            id
        }
    })
}

export const findUserByUsernameAndEmail = async (username: string, email: string): Promise<User | null> => {
    return prisma.user.findFirst({
        where: {
            OR: [
                {
                    username
                },
                {
                    email
                }
            ]
        }
    })
}

export const createUser = async (user: UserInput): Promise<User> => {
    return prisma.user.create({
        data: user
    })
}

export const linkAccounts = async (linkerId: string, toLinkId: string): Promise<User> => {
    const newUser = await prisma.user.update({
        where: { id: linkerId },
        data: {
            linkedUsers: {
                connect: { id: toLinkId },
            }
        },
      });
      
      await prisma.user.update({
        where: { id: toLinkId },
        data: {
          linkedUsers: {
            connect: { id: linkerId },
          },
        },
      });
      
    return newUser;
}
