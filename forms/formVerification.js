 // (function (){
	 // var app = angular.module('checkForm', []);
	 // app.controller('FormController', function(){}
	 // });

 angular.module('userSignup', [])
   .controller('FormController', ['$scope', function($scope) {
     $scope.master = {};
 
     $scope.update = function(user) {
       $scope.master = angular.copy(user);
     };
 
     $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
     };
 
     $scope.isUnchanged = function(user) {
       return angular.equals(user, $scope.master);
     };
 
     $scope.reset();
   }]);
  

