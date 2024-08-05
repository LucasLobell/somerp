const Sale = require('../models/sales');

const getSales = async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
};

const createSale = async (req, res) => {
  const { product, amount } = req.body;
  const sale = new Sale({ product, amount });
  await sale.save();
  res.status(201).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { product, amount } = req.body;
  const sale = await Sale.findByIdAndUpdate(id, { product, amount }, { new: true });
  res.json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await Sale.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = { getSales, createSale, updateSale, deleteSale };
