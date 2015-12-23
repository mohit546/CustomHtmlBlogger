angular.module('myBlog.Controller', [])
.controller('mainCtrl', function($scope, networkCall, $timeout, $window){


	// $scope.$on("$stateChangeStart", function(){

	// });

	$scope.userEmail = null;

	$scope.init = function(){
		getUser();
	};
	$timeout($scope.init);


	var getUser = function(){
		var dataPromis = networkCall.getUserRequest();
		dataPromis.then(function(result){
			console.log(result);
			if(!result.status){
				console.log('error');
			}else{
				$scope.userEmail = result.userDetail.useremail;
			}
		});
	};

});
