angular.module('loginApp.controller', [])
.controller('loginCtrl', function($scope, loginService, $window){
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
			if(!result.status){
				console.log('error');
			}else{
				$window.localStorage.setItem('token', result.token);
				$window.location.href = result.redirectUrl;
			}
		});
	};

	$scope.signUp = function(){
		var dataPromis = loginService.signUpRequest($scope.newUserEmail, $scope.newUserPassword, $scope.newUserRepeatPassword);
		dataPromis.then(function(result){
			console.log(result);
			if(!result.status){
				console.log('error');
			}else{
				$window.localStorage.setItem('token', result.token);
			}
		});
	};

	$scope.signInFacebook= function(){};

	$scope.signInGoogle= function(){};

});
