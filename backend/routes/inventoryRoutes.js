const express = require('express');
const { getInventory, createItem, updateItem, deleteItem } = require('../controllers/inventoryController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getInventory)
  .post(protect, createItem);

router.route('/:id')
  .put(protect, updateItem)
  .delete(protect, deleteItem);

module.exports = router;
