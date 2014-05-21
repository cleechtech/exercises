// This will include ./node_modules/angular/angular.js
// and give us access to the `angular` global object.
require('angular');
require('angular-ui-router');

var app = angular.module('browserify-begin', ['ui.router'])

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/home.html'
		})
		.state('browse', {
			url: '/browse',
			templateUrl: 'partials/browse.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html'
		})
	$urlRouterProvider.otherwise('/')
}])