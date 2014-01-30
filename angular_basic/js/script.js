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

// share data between controllers: http://www.thinkster.io/pick/9jfpSmbx1j/angularjs-sharing-data-between-controllers
// define a method on the scope (in a controller): http://www.thinkster.io/pick/S6NUuKBgDW/angularjs-defining-a-method-on-the-scope
// understand isolate scope (ex: children do chores): http://www.thinkster.io/pick/KnxWvHUW64/angularjs-understanding-isolate-scope
