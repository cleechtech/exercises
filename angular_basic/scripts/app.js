// run a simple server in project directory:
// python -m SimpleHTTPServer

var angular_basic = angular.module('angular_basic', [
	'ngRoute'
]);

// load templates. Inject $injector instead of $compile to avoid
// circular dependency
// https://gist.github.com/vojtajina/3354046
angular_basic.factory('$templateCache', function($cacheFactory, $http, $injector){
	var cache =  $cacheFactory('templates'),
	allTplPromise;

	return {
		get: function(url){
			var fromCache = cache.get(url)

			// already have required template in cache
			if(fromCache){
				return fromCache
			}

			// first template request, get all
			if(!allTplPromise){
				allTplPromise = $http.get('views/allViews.html').then(function(response){
					// compile the response, put templates in cache
					$injector.get('$compile')(response.data)
					return response
				})
			}

			// return the promise for all template requests
			return allTplPromise.then(function(response){
				return {
					status: response.status,
					data: cache.get(url)
				}
			})
		},

		put: function(key, value){
			cache.put(key, value)
		}	

	}
});

// routing (templateUrl as id in allViews.html)
angular_basic.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'MainCtrl'
		})
		.when('/notepad', {
			templateUrl: 'notepad.html'
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})