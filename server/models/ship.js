// server/models/ship.js
var mongoose = require('mongoose');

// exports allow other files to use it
module.exports = mongoose.model('Ship', {
    name: String
});