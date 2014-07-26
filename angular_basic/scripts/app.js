// run a simple server in project directory:
// python -m SimpleHTTPServer

var angular_basic = angular.module('angular_basic', [
	'ngRoute'
]);

angular_basic.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.otherwise({
			redirectTo: '/'
		});
})