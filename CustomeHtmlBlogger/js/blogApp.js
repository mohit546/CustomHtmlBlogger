angular.module('myBlog', ['myBlog.Controller', 'ui.router', 'ui.bootstrap', 'bootstrap'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	});

	$urlRouterProvider.otherwise('/home');

});

