const express = require('express');
const { getSales, createSale, updateSale, deleteSale } = require('../controllers/salesController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, getSales)
  .post(protect, createSale);

router.route('/:id')
  .put(protect, updateSale)
  .delete(protect, deleteSale);

module.exports = router;
