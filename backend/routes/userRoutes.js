const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getUsers)
  .post(createUser);

router.route('/:id')
  .put(protect, updateUser)
  .delete(protect, deleteUser);

router.post('/login', loginUser);

module.exports = router;
