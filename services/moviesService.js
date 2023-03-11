const moviesRepo = require('../repositories/moviesRepositories.js');

class MoviesServices{

    static getAllMoviesService = async () => {
        try {
            const data = await moviesRepo.getAllMoviesRepo();
            return data;
        } catch (error) {
            throw error
        }
    }

    static getAllMoviesByIdService = async (id) => {
        try {
            const data = await moviesRepo.getAllMoviesByIdRepo(id);
            return data;
        } catch (error) {
            throw error
        }
    }

    static createMoviesService = async (movie) => {
        try {
            const data = await moviesRepo.createMoviesRepo(movie);
            return data;
        } catch (error) {
            throw error
        }
    }

    static updateMoviesService = async (movie) => {
        try {
            const data = await moviesRepo.updateMoviesRepo(movie);
            return data;
        } catch (error) {
            throw error
        }
    }

    static deleteMoviesById = async (id) => {
        try {
            const data = await moviesRepo.deleteMovieByIdRepo(id);
            return data;
        } catch (error) {
            throw error
        }
    }
}

module.exports = MoviesServices