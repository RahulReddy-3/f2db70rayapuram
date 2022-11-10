const mongoose = require("mongoose") 
const vcSchema = mongoose.Schema({ 
 ProductID: Number, 
 DateOfManufacturing: String, 
 WarrantyinYears: Number 
}) 
 
module.exports = mongoose.model("vacuumcleaner", 
vcSchema)