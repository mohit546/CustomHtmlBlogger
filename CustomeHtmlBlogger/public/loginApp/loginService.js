angular.module('loginApp.service', [])
.factory('loginService', function($http){


	var signUpRequest = function(useremail,password1, password2){
		return $http.post('/api/signup/', {userEmail: useremail, password1: password1, password2: password2}).then(function(result){
			return result.data;
		});
	};

	var loginRequest = function(useremail, password){
		return $http.post('/api/login/', {userEmail: useremail, password: password}).then(function(result){
			return result.data;
		});
	};


	return {
		signUpRequest: signUpRequest,
		loginRequest : loginRequest
	};

});
