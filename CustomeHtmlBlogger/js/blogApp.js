angular.module('myBlog', ['myBlog.Controller','ngRoute'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	});

	$urlRouterProvider.otherwise('/home');

});

