var express = require('express');
const vacuumcleaner_controlers = require('../controllers/vacuumcleaner');
var router = express.Router();


router.get('/', vacuumcleaner_controlers.vacuumcleaner_view_all_Page );

/* GET detail costume page */
router.get('/detail', vacuumcleaner_controlers.vacuumcleaner_view_one_Page);

/* GET create costume page */
router.get('/create', vacuumcleaner_controlers.vacuumcleaner_create_Page);

/* GET create update page */
router.get('/update', vacuumcleaner_controlers.vacuumcleaner_update_Page);

module.exports = router;
