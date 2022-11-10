var vacuumcleaner = require('../models/vacuumcleaner'); 
 
// List of all vacuumcleaner
exports.vacuumcleaner_list = async function(req, res) { 
    try{ 
        theVC = await vacuumcleaner.find(); 
        res.send(theVC); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.vacuumcleaner_view_all_Page = async function(req, res) { 
    try{ 
        theVC = await vacuumcleaner.find(); 
        res.render('vacuumcleaner', { title: 'Vacuum Cleaner Search Results', results: theVC }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.vacuumcleaner_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new vacuumcleaner(); 
   // We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"ProductID":1438, "DateOfManufacturing":"03-23-2017", "WarrantyinYears":3}
    document.ProductID = req.body.ProductID;    
    document.DateOfManufacturing = req.body.DateOfManufacturing;
    document.WarrantyinYears = req.body.WarrantyinYears;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Vacuum Cleaner. 
exports.vacuumcleaner_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vacuum Cleaner detail: ' + req.params.id); 
}; 
 

// Handle Vacuum Cleaner delete form on DELETE. 
exports.vacuumcleaner_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vacuum Cleaner delete DELETE ' + req.params.id); 
}; 
 
// Handle Vacuum Cleaner update form on PUT. 
exports.vacuumcleaner_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vacuum Cleaner update PUT' + req.params.id); 
}; 