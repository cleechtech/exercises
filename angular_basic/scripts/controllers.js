angular_basic.controller('MainController', function($scope){
		$scope.message = 'this is message on the scope';
	})
	.controller('AboutController', function($scope){
		$scope.message = 'this is about controller scope';
	})
	.controller('ContactController', function($scope){
		$scope.message = 'this is a dummy contact page';
	});