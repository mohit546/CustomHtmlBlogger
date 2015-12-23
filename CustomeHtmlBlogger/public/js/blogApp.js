angular.module('myBlog', ['myBlog.controller', 'myBlog.service', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	// .state('home', {
	// 	url: '/home'
	// })
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'views/templates/dashboard.html',
		controller: 'dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/dashboard');

});

