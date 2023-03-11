const MoviesServices = require("../services/moviesService.js");

class MoviesController {
  static getAllMovies = async (req, res) => {
    try {
      const data = await MoviesServices.getAllMoviesService();
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  };

  static getAllMoviesById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await MoviesServices.getAllMoviesByIdService(id);
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

  static createMovies = async (req, res) => {
    try {
      const movie = req.body;
      const data = await MoviesServices.createMoviesService(movie);
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
      const movie = req.body;
      const dataId = await MoviesServices.getAllMoviesByIdService(id);
      if (dataId.rows.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "Id Does Not Exist",
        });
      } else {
        const data = await MoviesServices.updateMoviesService(movie);
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

  static deleteMoviesById = async (req, res) => {
    try {
      const { id } = req.params;
      const dataId = await MoviesServices.getAllMoviesByIdService(id);
      if (dataId.rows.length === 0) {
        res.status(404).json({
          status: "fail",
          message: "Id Does Not Exist",
        });
      } else {
        const data = await MoviesServices.deleteMoviesById(id);
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

module.exports = MoviesController;
