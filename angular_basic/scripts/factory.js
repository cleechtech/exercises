'use strict';

// save note object to (key : value) as (note+id : noteObj)
angular_basic.factory('notesFactory', function(){
	return {
		put: function(note){
			localStorage.setItem('note' + note.id, JSON.stringify(note))
			return this.getAll()
		},
		getAll: function(){
			var notes = []
			for(var i = 0; i < localStorage.length; i++){
				// if there are notes in localStorage
				if(localStorage.key(i).indexOf('note') !== -1){
					var note = localStorage.getItem(localStorage.key(i))
					notes.push(JSON.parse(note))
				}
			}
			return notes;
		},
		get: function(index){
			return JSON.parse(localStorage.getItem('note' + index))
		}
	}
})