// run a simple server in project directory:
// python -m SimpleHTTPServer

var angular_basic = angular.module('angular_basic', ['ngRoute']);

angular_basic
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'mainController'
			})
			.when('/about', {
				templateUrl: 'pages/about.html',
				controller: 'aboutController'
			})
			.when('/contact', {
				templateUrl: 'pages/contact.html',
				controller: 'contactController'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.controller('mainController', function($scope){
		$scope.message = 'this is message on the scope';
	})
	.controller('aboutController', function($scope){
		$scope.message = 'this is about controller scope';
	})
	.controller('contactController', function($scope){
		$scope.message = 'this is a dummy contact page';
	});

