angular.module('myBlog', ['myBlog.Controller', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'views/templates/dashboard.html'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'views/templates/login.html'
	});

	$urlRouterProvider.otherwise('/dashboard');

});

