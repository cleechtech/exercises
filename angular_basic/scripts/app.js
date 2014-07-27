// run a simple server in project directory:
// python -m SimpleHTTPServer

var angular_basic = angular.module('angular_basic', [
	'ngRoute'
]);

angular_basic.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})
		.when('/notepad', {
			templateUrl: 'views/notepad.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})