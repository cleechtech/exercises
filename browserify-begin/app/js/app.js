// This will include ./node_modules/angular/angular.js
// and give us access to the `angular` global object.
require('angular/angular');
require('angular-route/angular-route');

var app = angular.module('browserify-begin', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/browse', {
			templateUrl: 'partials/browse.html'
		})
		.when('/about', {
			templateUrl: 'partials/about.html'
		})
		.otherwise({redirectTo: '/'})
}])