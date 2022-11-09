const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
ProductID: Number,
DateOfManufacturing: String,
WarrantyinYears: Number
})
module.exports = mongoose.model("Costume",
costumeSchema)