const pool = require("../config/db-connection.js");

class MoviesModels {
  static getAllUsers = async () => {
    const queryAllUsers = `SELECT * FROM users`;

    try {
      const data = await pool.query(queryAllUsers);
      return data.rows;
    } catch (error) {
      throw error;
    }
  };

  static getUsersById = async (id) => {
    const queryGetUsersById = `SELECT * FROM users
                                WHERE id = $1`;

    try {
      const data = await pool.query(queryGetUsersById, [id]);
      return data;
    } catch (error) {
      throw error;
    }
  };

  static createUsers = async (users) => {
    const { id, email, gender, password, role} = users;
    const createUsers = `INSERT INTO users (id, email, gender, password, role)
                          VALUES ($1, $2, $3, $4, $5)
                          RETURNING * `;

    try {
      const {rows} = await pool.query(createUsers, [id, email, gender, password, role]);
      return rows;
    } catch (error) {
      throw error;
    }
  };

  static updateUsers = async (users) => {
    const { id, email, gender, password, role} = users;
    const updateUsers = `UPDATE users 
                          SET email = $2, gender = $3, password = $4, role = $5
                          WHERE id = $1
                          RETURNING *`;

    try {
        const {rows} = await pool.query(updateUsers, [id, email, gender, password, role]);
        return rows;
    } catch (error) {
        throw error
    }
  }

  static deleteUsersById = async (id) => {
    const queryDelete = `DELETE FROM users WHERE id = $1
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
