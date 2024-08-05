const Inventory = require('../models/inventory');

const getInventory = async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
};

const createItem = async (req, res) => {
  const { name, quantity } = req.body;
  const item = new Inventory({ name, quantity });
  await item.save();
  res.status(201).json(item);
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const item = await Inventory.findByIdAndUpdate(id, { name, quantity }, { new: true });
  res.json(item);
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await Inventory.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = { getInventory, createItem, updateItem, deleteItem };
