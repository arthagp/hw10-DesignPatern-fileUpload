const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');


router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getAllUsersById);
router.post('/users', userController.createUsers);
router.put('/users/:id', userController.updateMoviesById);
router.delete('/users/:id', userController.deleteUsersById);

module.exports = router;
