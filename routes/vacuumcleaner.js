var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('VacuumCleaner', { title: 'Search results Vacuum Cleaner' });
});

module.exports = router;
