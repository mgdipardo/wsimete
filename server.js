// server.js
var express         = require('express'),
    app             = express();
    bodyParser      = require('body-parser');
    mongoose        = require('mongoose');
    shipsController = require('./server/controllers/ships-controller');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/wsim');

// ****************
// Routes
// ****************

// When someone makes a request to our application, we are going to
// respond with index.html.
//
// This is the default route.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

// ****************
// Middleware
// ****************

// Include body parser to get the body of a request.  Body parsing
// is does not come as a default from express.
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// This is a whole lot of nothing.  All this does is make an
// alias for a given directory so you do not have to spell out
// the exact directory.
//
// For example, client/views/index.html says find the script
// ships-controller in js/controllers.  But, it is really in
// /client/js/controllers.
app.use('/js', express.static(__dirname + '/client/js'));

// REST API
// This gets the list of ships for the client.  It is in the
// server-side ships-controller.
app.get('/api/ships', shipsController.list);
// This saves the added ships from the client.  It is in the
// server-side ships-controller.
app.post('/api/ships', shipsController.create);

// Define where express listens on this port
app.listen(3000, function() {
    console.log('I\'m Listening...');
})