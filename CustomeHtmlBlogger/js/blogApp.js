angular.module('myBlog', ['myBlog.Controller', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	});

	$urlRouterProvider.otherwise('/home');

});

