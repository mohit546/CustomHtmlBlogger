angular.module('myBlog', ['myBlog.Controller', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	})
	.state('dashboard', {
		url: '/dashboard/',
		templateUrl: 'views/templates/dashboard.html'
	});

	$urlRouterProvider.otherwise('/dashboard/');

});

