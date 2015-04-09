// client/js/controllers/ships-controllers.js

// Defines our controller that is referenced in client/js/app.js.
//
// Parameters
//   shipsController = name of the controller defined in server.js
//   Dependency array
//     $scope is used to bind views and controllers
//     $resource = name that angular gives for ngResource defined in client/js/app.js
//     function = ????.  It can use the same names for parameters as the dependency.
app.controller('shipsController', ['$scope', '$resource', function ($scope, $resource) {
    var Ship = $resource('/api/ships');

    // Get all the ships from the database
    Ship.query(function (results) {
        // Get all the results in the list
        $scope.ships = results;
    });

    $scope.ships = []

    $scope.createShip = function() {
        var ship = new Ship();
        ship.name = $scope.shipName;
        // Do the call back function and handle the result
        ship.$save(function (result) {
            // Received from the server ship-controller in json format.
            // We can simply push the result to the client.
            $scope.ships.push(result);
            // Clear out the text box
            $scope.shipName = '';
        });
    }
}]);