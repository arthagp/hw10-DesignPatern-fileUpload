const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController.js');


router.get('/movies', moviesController.getAllMovies);
router.get('/movies/:id', moviesController.getAllMoviesById);
router.post('/movies', moviesController.createMovies);
router.put('/movies/:id', moviesController.updateMoviesById);
router.delete('/movies/:id', moviesController.deleteMoviesById);

module.exports = router;
