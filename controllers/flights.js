const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    new: newFlight
}

function index(req, res){
    Flight.find({}, function(err, flightDocuments){
        // console.log(flightDocuments)
        res.render('flights/index', {
            flights: flightDocuments
        })
    })
  
}


function newFlight(req, res){
    res.render('flights/new')
}


function create(req, res) {
    let dt = new Flight().departs
    console.log(dt)
    req.body.nowFlying = !!req.body.nowFlying;
    console.log(req.body);
    if (!req.body.departs) {
      req.body.departs = dt
    }
    // req.body.airline = req.body.airline.replace(/\s*,\s*/g, ',');
    // if (req.body.airline) req.body.airline = req.body.airline.split(',');
    const flight = new Flight(req.body);  
    console.log('flight', flight);
    flight.save(function(err) {
      if (err) {
        console.log(err);  
        return res.render('flights/new');
    }
      console.log(flight, ' this is our document that we created in mongodb');
    //   for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }