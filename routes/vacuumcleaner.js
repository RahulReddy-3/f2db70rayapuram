var express = require('express');
const vacuumcleaner_controlers = require('../controllers/vacuumcleaner');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
   if (req.user){
      return next();
   }
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

router.get('/', vacuumcleaner_controlers.vacuumcleaner_view_all_Page );

/* GET detail costume page */
router.get('/detail', vacuumcleaner_controlers.vacuumcleaner_view_one_Page);

/* GET create costume page */
router.get('/create', secured, vacuumcleaner_controlers.vacuumcleaner_create_Page);

/* GET create update page */
router.get('/update', secured, vacuumcleaner_controlers.vacuumcleaner_update_Page);

/* GET delete costume page */
router.get('/delete',  secured, vacuumcleaner_controlers.vacuumcleaner_delete_Page);

module.exports = router;
