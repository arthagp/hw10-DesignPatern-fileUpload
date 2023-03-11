const pool = require("../config/db-connection.js");

class MoviesModels {
  static getAllMovies = async () => {
    const queryAllMovies = `SELECT * FROM movies`;

    try {
      const data = await pool.query(queryAllMovies);
      return data.rows;
    } catch (error) {
      throw error;
    }
  };

  static getMoviesById = async (id) => {
    const queryGetMoviesById = `SELECT * FROM movies
                                WHERE id = $1`;

    try {
      const data = await pool.query(queryGetMoviesById, [id]);
      return data;
    } catch (error) {
      throw error;
    }
  };

  static createMovies = async (movie) => {
    const { id, title, genres, year } = movie;
    const createMovies = `INSERT INTO movies (id, title, genres, year)
                          VALUES ($1, $2, $3, $4)
                          RETURNING * `;

    try {
      const {rows} = await pool.query(createMovies, [id, title, genres, year]);
      return rows;
    } catch (error) {
      throw error;
    }
  };

  static updateMovies = async (movie) => {
    const {id, title, genres, year} = movie;
    // movie.id = id
    const updateMovies = `UPDATE movies 
                          SET title = $2, genres = $3, year = $4
                          WHERE id = $1
                          RETURNING *`;

    try {
        const {rows} = await pool.query(updateMovies, [id, title, genres, year]);
        return rows;
    } catch (error) {
        throw error
    }
  }

  static deleteMoviesById = async (id) => {
    const queryDelete = `DELETE FROM movies WHERE id = $1
                         RETURNING *`

    try {
        const {rows} = await pool.query(queryDelete, [id]);
        return rows;
    } catch (error) {
        throw error
    }
  }
}

module.exports = MoviesModels;
