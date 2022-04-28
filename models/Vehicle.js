const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
name: String,
type: String,
noofpassengers:  {
    type: Number,
    min: 2,
    max: 99,
require:true  }

})
module.exports = mongoose.model("Vehicle",vehicleSchema)

