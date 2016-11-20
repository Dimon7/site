// Define the `phonecatApp` module
var deApp = angular.module('deApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
deApp.controller('exerciseController', function exerciseController($scope) {
  $scope.tests = [
    {
      audioUrl: '',
      answer: 'fahren'
      
    }, {
      audioUrl: '',
      answer: 'laufen'
    }, {
      audioUrl: '',
      answer: 'Mutter'
    
    }
  ];

  


});