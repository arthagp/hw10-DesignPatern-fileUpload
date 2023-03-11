const movies = require("../models/moviesModels.js");

class MoviesRepositories {

  static getAllMoviesRepo = async () => {
    try {
        const data = await movies.getAllMovies();
        return data
    } catch (error) {
        throw error
    }
  };

  static getAllMoviesByIdRepo = async (id) => {
    try {
        const data = await movies.getMoviesById(id);
        return data;
    } catch (error) {
        throw error
    }
  }

  static createMoviesRepo = async (movie) => {
    try {
        const data = await movies.createMovies(movie)
        return data;
    } catch (error) {
        throw error
    }
  }

  static updateMoviesRepo = async (movie) => {
    try {
        const data = await movies.updateMovies(movie);
        return data;
    } catch (error) {
        throw error
    }
  }

  static deleteMovieByIdRepo = async (id) => {
    try {
        const data = await movies.deleteMoviesById(id);
        return data;
    } catch (error) {
        throw error
    }
  }
}

module.exports = MoviesRepositories;
