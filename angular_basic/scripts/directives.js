'use strict';

// tutorial: http://www.sitepoint.com/practical-guide-angularjs-directives-part-two/
// plunkr: http://plnkr.co/edit/14q6WxHyhWuVxEIqwww1?p=preview

angular_basic.directive('helloWorld', function(){
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			// isolate scope one way binding
			color: '@colorAttr',
			// alternatively, if isolate scope property
			// and attribute name is the same, could write:
			// color: '@'
			// and the html would be color="{{color}}"
			// or use &:
			// http://plnkr.co/edit/k4scWKwtGBJw7lfKGqVJ?p=preview
		},
		// scope: true,	// child scope
		template: '<h3 style="background-color: {{color}}">Hello world!</h3>',
		link: function(scope, elem, attrs){
			elem.bind('click', function(){
				elem.css('background-color', 'white')
				scope.$apply(function(){
					scope.color = 'white'
				})
			})

			elem.bind('mouseover', function(){
				elem.css('cursor', 'pointer')
			})
		}
	}
});