const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
name: String,
type: String,
noofpassengers: Number
})
module.exports = mongoose.model("Vehicle",vehicleSchema)