const usersRepo = require('../repositories/userRepositroies.js');

class UsersServices{

    static getAllUserService = async () => {
        try {
            const data = await usersRepo.getAllUsersRepo();
            return data;
        } catch (error) {
            throw error
        }
    }

    static getAllUsersByIdService = async (id) => {
        try {
            const data = await usersRepo.getUsersByIdRepo(id);
            return data;
        } catch (error) {
            throw error
        }
    }

    static createUsersService = async (users) => {
        try {
            const data = await usersRepo.createUsersRepo(users);
            return data;
        } catch (error) {
            throw error
        }
    }

    static updateUsersService = async (users) => {
        try {
            const data = await usersRepo.updateUsersRepo(users);
            return data;
        } catch (error) {
            throw error
        }
    }

    static deleteMoviesById = async (id) => {
        try {
            const data = await usersRepo.deleteUsersByIdRepo(id);
            return data;
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices