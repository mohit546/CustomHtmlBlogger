angular.module('myBlog.controller')
.controller('dashboardCtrl', function($scope){
	console.log('dashboardCtrl is loaded');


	$scope.toggleSideBar = function(){
		console.log('sideBar');
		$('.ui.labeled.icon.sidebar').sidebar('toggle');
	};

});
