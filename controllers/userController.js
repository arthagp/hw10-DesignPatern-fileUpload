const UsersServices = require("../services/userService.js");

class UsersController {
  static getAllUsers = async (req, res) => {
    try {
      const data = await UsersServices.getAllUserService();
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  };

  static getAllUsersById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UsersServices.getAllUsersByIdService(id);
      if (data.rows.length === 0) {
        res.status(404).json({
          status: "Fail",
          message: "Error Not Found",
        });
      } else {
        res.status(200).json(data.rows);
      }
    } catch (error) {
      throw error;
    }
  };

  static createUsers = async (req, res) => {
    try {
      const users = req.body;
      const data = await UsersServices.createUsersService(users);
      res.status(200).json({
        status: "succes",
        message: "Insert Data Succesfuly",
        data: data,
      });
    } catch (error) {
      throw error;
    }
  };

  static updateMoviesById = async (req, res) => {
    try {
      const { id } = req.params;
      const users = req.body;
      const dataId = await UsersServices.getAllUsersByIdService(id);
      if (dataId.rows.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "Id Does Not Exist",
        });
      } else {
        const data = await UsersServices.updateUsersService(users);
        res.status(200).json({
          status: "succes",
          message: "Update Data Succesfuly",
          data: data,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  static deleteUsersById = async (req, res) => {
    try {
      const { id } = req.params;
      const dataId = await UsersServices.getAllUsersByIdService(id);
      if (dataId.rows.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "Id Does Not Exist",
        });
      } else {
        const data = await UsersServices.deleteUsersById(id);
        res.status(200).json({
          status: "succes",
          message: "Delete Data Succesfuly",
          data: data,
        });
      }
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UsersController;
