angular_basic.controller('MainCtrl', function($scope){
		$scope.message = 'this is message on the scope';
	})
	.controller('NotepadCtrl', function($scope){
		$scope.message = 'this is notepad controller scope';
	})
	.controller('ContactCtrl', function($scope){
		$scope.message = 'this is a dummy contact page';
	});