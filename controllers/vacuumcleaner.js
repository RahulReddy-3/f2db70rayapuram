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

// Handle vacuumcleaner create on POST. 
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

// for a specific Vacuumcleaner.
exports.vacuumcleaner_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await vacuumcleaner.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle Costume delete on DELETE.
exports.vacuumcleaner_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await vacuumcleaner.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };



// Handle Vacuum Cleaner update form on PUT.

exports.vacuumcleaner_update_put = async function(req, res) {

    console.log(`update on id ${req.params.id} with body

${JSON.stringify(req.body)}`)

    try {

        let toUpdate = await vacuumcleaner.findById( req.params.id)

        // Do updates of properties

        if(req.body.ProductID) toUpdate.ProductID = req.body.ProductID;

        if(req.body.DateOfManufacturing) toUpdate.DateOfManufacturing = req.body.DateOfManufacturing;

        if(req.body.WarrantyinYears) toUpdate.WarrantyinYears = req.body.WarrantyinYears;

        let result = await toUpdate.save();

        console.log("Sucess " + result)

        res.send(result)

    } catch (err) {

        res.status(500)

        res.send(`{"error": ${err}: Update for id ${req.params.id}

failed`);

    }

    

};

// Handle a show one view with id specified by query
exports.vacuumcleaner_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
     result = await vacuumcleaner.findById( req.query.id)
     res.render('vacuumcleanerdetail',
         { title: 'Vacuumcleaner Detail', toShow: result });
    }
    catch(err){
     res.status(500)
     res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a cereal.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vacuumcleaner_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('vacuumcleanercreate', { title: 'Vacuum Cleaner Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a cereal.
// query provides the id
exports.vacuumcleaner_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await vacuumcleaner.findById(req.query.id)
        res.render('vacuumcleanerupdate', { title: 'Vacuum Cleaner Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.vacuumcleaner_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await vacuumcleaner.findById(req.query.id)
        res.render('vacuumcleanerdelete', {
            title: 'vacuumcleaner Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
