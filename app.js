var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var vc = require("./models/vacuumcleaner");

require('dotenv').config();
const connectionString =process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

//Get the default connection 
var db = mongoose.connection; 


//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vacuumcleanerRouter = require('./routes/vacuumcleaner');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vacuumcleaner', vacuumcleanerRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





// We can seed the collection if needed on
//server start
async function recreateDB(){
  // Delete everything
  await vc.deleteMany();
  
  let instance1 = new vc({ProductID:1224, DateOfManufacturing:'12-03-2022',WarrantyinYears:2});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  
  
  
  
  let instance2 = new vc({ProductID:1225, DateOfManufacturing:'12-05-2022',WarrantyinYears:2});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
  
  
  
  
  let instance3 = new vc({ProductID:1226, DateOfManufacturing:'12-08-2022',WarrantyinYears:2});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}


module.exports = app;







