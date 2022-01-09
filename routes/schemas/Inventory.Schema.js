const Schema = require('mongoose').Schema;

exports.InventorySchema = new Schema({
    name: String,
    number: Number,
// this explicitly declares what collection we're using
}, { collection : 'inventories' });