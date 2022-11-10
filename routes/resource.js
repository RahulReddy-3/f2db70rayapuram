var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api.js'); 
var vacuumcleaner_controller = require('../controllers/vacuumcleaner'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a vacuumcleaner.  
router.post('/vacuumcleaner', vacuumcleaner_controller.vacuumcleaner_create_post); 
 
// DELETE request to delete vacuumcleaner. 
router.delete('/vacuumcleaner/:id', vacuumcleaner_controller.vacuumcleaner_delete); 
 
// PUT request to update vacuumcleaner. 
router.put('/vacuumcleaner/:id', vacuumcleaner_controller.vacuumcleaner_update_put); 
 
// GET request for one vacuumcleaner. 
router.get('/vacuumcleaner/:id', vacuumcleaner_controller.vacuumcleaner_detail); 
 
// GET request for list of all vacuumcleaner items. 
router.get('/vacuumcleaner', vacuumcleaner_controller.vacuumcleaner_list); 
 
module.exports = router;