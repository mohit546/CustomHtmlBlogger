angular.module('myBlog.service', [])
.factory('networkCall', function($http, $window){


	if($window.localStorage.getItem('token') != undefined){
		var token = $window.localStorage.getItem('token');
		console.log(token);
		$http.defaults.headers.get = { 'x-access-token': token };
	}

	var getUserRequest = function(){
		return $http.get('/api/me/').then(function(result){
			return result.data;
		});
	};

	return {
		getUserRequest : getUserRequest
	};
});
