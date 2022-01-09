const mongoose = require("mongoose")
const InventorySchema = require('../schemas/Inventory.Schema').InventorySchema

const InventoryModel = mongoose.model("Inventory", InventorySchema);

function insertInventory(inventory) {
    return InventoryModel.create(inventory);
}

function findInventoryById(id) {
    return InventoryModel.findById(id);
}

function getAllInventories() {
    return InventoryModel.find().exec();
}

function findInventoryByIdAndUpdate(id, inventory){
    return InventoryModel.findByIdAndUpdate(id, {...inventory});
}

function findInventoryByIdAndDelete(id) {
    return InventoryModel.findByIdAndRemove(id);
}

module.exports = {
    insertInventory,
    findInventoryById,
    getAllInventories,
    findInventoryByIdAndDelete,
    findInventoryByIdAndUpdate,
};