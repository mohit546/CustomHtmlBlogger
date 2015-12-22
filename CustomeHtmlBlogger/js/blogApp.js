angular.module('myBlog', ['myBlog.Controller','ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/home'
	});

	$urlRouterProvider.otherwise('/home');

});

