// server/controllers/ships-controller.js

var Ship = require('../models/ship');

// This is called by the client to add a new ship.
module.exports.create = function (req, res) {
    // Create new instance of the model.
    // It can simply use the request's body.
    var ship = new Ship(req.body);

    // Since node.js is asynchronous, we need to catch the result via
    // a call back.
    ship.save(function (err, result) {
        // Send the result (which is in json) back down to the client
        res.json(result);
    });
}

// This is called by the client to list all the existing ships
module.exports.list = function (req, res) {
    // Get the list of ships using mongo commands and deal
    // with the call back function
    Ship.find({}, function (err, results) {
        // Return to the client the list of results.
        res.json(results);
    });
}