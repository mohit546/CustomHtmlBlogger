angular.module('loginApp.controller', [])
.controller('loginCtrl', function($scope, loginService){
	console.log('loginCtrl');

	$scope.userEmail = null;
	$scope.userPassword = null;

	$scope.newUserEmail = null;
	$scope.newUserPassword = null;
	$scope.newUserRepeatPassword = null;

	$scope.login = function(){
		console.log('login');
		console.log($scope.userEmail);
		console.log($scope.userPassword);
		var dataPromis = loginService.loginRequest($scope.userEmail, $scope.userPassword);
		dataPromis.then(function(result){
			console.log(result);
		});
	};

	$scope.signUp = function(){
		var dataPromis = loginService.signUpRequest($scope.newUserEmail, $scope.newUserPassword, $scope.newUserRepeatPassword);
		dataPromis.then(function(result){
			console.log(result);
		});
	};

	$scope.signInFacebook= function(){};

	$scope.signInGoogle= function(){};

});
