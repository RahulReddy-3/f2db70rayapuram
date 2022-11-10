var express = require('express');
const vacuumcleaner_controlers = require('../controllers/vacuumcleaner');
var router = express.Router();


router.get('/', vacuumcleaner_controlers.vacuumcleaner_view_all_Page );

module.exports = router;
