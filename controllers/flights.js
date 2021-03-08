const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    new: newFlight
}

function index(req, res){
    Flight.find({}, function(err, flightDocuments){
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
  
}


function newFlight(req, res){
    res.render('flights/new')
}


    function create(req, res) {
      let dt= new Flight().departs
      if (!req.body.departs){
      req.body.departs = dt
      }
      const flight = new Flight(req.body);
      flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
      });
      }; 