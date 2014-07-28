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

angular_basic.directive('notepad', function(notesFactory){
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'partials/notepad.html',
		link: function(scope, elem, attrs){
			
		// initialize controls
			scope.restore = function(){
				scope.editMode = false;
				scope.index = -1;	// for when we're creating new note
				scope.noteText = '';
			}

			scope.openEditor = function(index){
				scope.editMode = true;

				// parameter, edit mode
				if(index !== undefined){
					scope.noteText =  notesFactory.get(index).content;
					scope.index = index;
				} else {
					// create note mode
					scope.noteText = undefined;
				}
			}

			scope.save = function(){
				// actual text in note
				if(scope.noteText !== ''){
					var note = {};

					note.title = scope.noteText.length > 10 ? scope.noteText.substring(0, 10) + '...' : scope.noteText;
					note.content = scope.noteText;
					note.id = scope.index != -1 ? scope.index : localStorage.length;
					scope.notes = notesFactory.put(note)
				}
				// reset for next note
				scope.restore();
			}

			var editor = elem.find('#editor');
			scope.restore();	// init app controls
			scope.notes = notesFactory.getAll(); // load notes
			editor.bind('keyup keydown', function(){
				scope.noteText = editor.text().trim();
			})
		}
	}
})