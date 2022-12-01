const mongoose = require("mongoose") 
const vcSchema = mongoose.Schema({ 
 ProductID: {type: Number, min: 1000}, 
 DateOfManufacturing: {type: String}, 
 WarrantyinYears: { type: Number, min: 1, max: 5 }
}) 
 
module.exports = mongoose.model("vacuumcleaner", vcSchema)