var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicle_controller = require('../controllers/vehicle');

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// vehicle ROUTES ///
// POST request for creating a vehicle.
router.post('/vehicles', vehicle_controller.vehicle_create_post);
// DELETE request to delete vehicle.
router.delete('/vehicles/:id', vehicle_controller.vehicle_delete);
// PUT request to update vehicle.
router.put('/vehicles/:id', vehicle_controller.vehicle_update_put);
// GET request for one vehicle.
router.get('/vehicles/:id', vehicle_controller.vehicle_detail);
// GET request for list of all vehicle items.
router.get('/vehicles', vehicle_controller.vehicle_list);
/* GET detail vehicle page */
router.get('/detail', vehicle_controller.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create',secured, vehicle_controller.vehicle_create_Page);

/* GET create update page */
router.get('/update',secured, vehicle_controller.vehicle_update_Page);

/* GET delete vehicle page */
router.get('/delete',secured, vehicle_controller.vehicle_delete_Page);
module.exports = router;