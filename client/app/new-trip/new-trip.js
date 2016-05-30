angular.module('hikeplanner.new-trip', ['ngAnimate'])

.controller('newTripController', function($scope, $location, $http) {

  // new trip data
  $scope.tripData = {
    name: '',
    where: '',
    begin: '',
    end: '',
    supplies: []
  };
  
  // to handle new supplies added
  $scope.supply = {
    value: ''
  };
  
  $scope.addSupplies = function() {
    $scope.tripData.supplies.push($scope.supply.value);
    $scope.supply.value = '';
    // console.log(JSON.stringify($scope.tripData.supplies));
  };
  
  $scope.removeSupplies = function(item) {
    console.log(item);
    var supplies = $scope.tripData.supplies;
    supplies.splice(supplies.indexOf(item), 1);
  }

  $scope.post = function() {
    console.log('posted');
    return $http({
      method: 'POST',
      url: '/summary',
      data: $scope.tripData
    })
    .then(function (resp) {
      console.log(resp);
    });
    // console.log(data);
    // data.push($scope.tripData);
    $location.path('/itinerary');
    
  };
  
});