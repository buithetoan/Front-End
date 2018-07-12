//create a module
var myApp = angular.module('myModule',[]);
myApp.controller('myController', function($scope){
  var employee = {
    FirstName:"Mark",
    LastName: "Hasting",
    Gender: "Male"
  }
  $scope.employee = employee;
});

myApp.controller('myController1', function myController1($scope){
  $scope.name= "BTT Toan";
  $scope.sayHello = function() {
    $scope.name = "Hello " + $scope.name;
  }
});
myApp.controller('myController2', function myController1($scope){
  $scope.name= "BTT Toan";
  $scope.sayHello = function() {
    $scope.name = "Hi " + $scope.name;
  }
});