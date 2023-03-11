const usersModels = require("../models/userModels.js");

class UsersRepositories {

  static getAllUsersRepo = async () => {
    try {
        const data = await usersModels.getAllUsers();
        return data
    } catch (error) {
        throw error
    }
  };

  static getUsersByIdRepo = async (id) => {
    try {
        const data = await usersModels.getUsersById(id);
        return data;
    } catch (error) {
        throw error
    }
  }

  static createUsersRepo = async (users) => {
    try {
        const data = await usersModels.createUsers(users);
        return data;
    } catch (error) {
        throw error
    }
  }

  static updateUsersRepo = async (users) => {
    try {
        const data = await usersModels.updateUsers(users);
        return data;
    } catch (error) {
        throw error
    }
  }

  static deleteUsersByIdRepo = async (id) => {
    try {
        const data = await usersModels.deleteUsersById(id);
        return data;
    } catch (error) {
        throw error
    }
  }
}

module.exports = UsersRepositories;
