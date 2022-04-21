const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
name: String,
type: String,
noofpassengers: Number
})
module.exports = mongoose.model("Vehicle",vehicleSchema)

// for a specific Costume.
exports.vehicle_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Costume.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};