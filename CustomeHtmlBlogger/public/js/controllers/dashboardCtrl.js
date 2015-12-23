angular.module('myBlog.controller')
.controller('dashboardCtrl', function($scope){
	console.log('dashboardCtrl is loaded');


	$scope.toggleSideBar = function(){
		console.log('sideBar');
		$('.ui.sidebar').sidebar('toggle');
	};

});
