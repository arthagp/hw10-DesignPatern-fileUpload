const express = require('express');
const router = express.Router();
const movies = require('./movies.js');
const users = require('./users.js');

router.use(movies)
router.use(users);

module.exports = router;