const express = require('express');
const router = express.Router()

const { user_index, user_show } = require('../controller/userControllers');

//@desc GET all user from mongo
//@route GET /api/users
//@access Public
router.get('/', user_index)


//@desc GET a user by id from mongo
//@route GET /api/user/:id
//@access Public
router.get('/:id', user_show)

module.exports = router;
