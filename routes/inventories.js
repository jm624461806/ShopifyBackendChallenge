const express = require("express");
const router = express.Router();
const InventoryAccessor = require('./models/Inventory.Model');

router.post("/createInventory", function(req, res) {
    const { InventoryItemName, InventoryItemNumber } = req.body;
    if (!InventoryItemName || !InventoryItemNumber)
        return res.status(422).send("Missing item name: " + InventoryItemName + "or item number" + InventoryItemNumber)
    
    return InventoryAccessor.insertInventory({name: InventoryItemName, number: Number(InventoryItemNumber)})
            .then(InventoryResponse => res.status(200).send(InventoryResponse))
            .catch(error => res.status(400).send(error))
})

router.get("/getAllInventories", function(req, res) {
    return InventoryAccessor.getAllInventories()
            .then(InventoryResponse => res.status(200).send(InventoryResponse))
            .catch(error => res.status(400).send(error))
})

router.get("/getInventory/:id", function(req, res) {
    const id = req.params.id;
    return InventoryAccessor.findInventoryById(id)
            .then(InventoryResponse => res.status(200).send(InventoryResponse))
            .catch(error => res.status(400).send(error))
})


router.put("/editInventory", function(req, res) {
    const { InventoryItemName, InventoryItemNumber, id} = req.body;
    if (!InventoryItemName || !InventoryItemNumber)
        return res.status(422).send("Missing item name: " + InventoryItemName + "or item number" + InventoryItemNumber)

    return InventoryAccessor.findInventoryByIdAndUpdate(id, {name: InventoryItemName, number: InventoryItemNumber})
            .then(InventoryResponse => res.status(200).send(InventoryResponse))
            .catch(error => res.status(400).send(error))
})

router.delete("/deleteInventory/:id", function(req, res) {
    const id = req.params.id;
    return InventoryAccessor.findInventoryByIdAndDelete(id)
            .then(InventoryResponse => res.status(200).send(InventoryResponse))
            .catch(error => res.status(400).send(error))
})

module.exports = router;