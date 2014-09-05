// Counts the comments by `username`.
// Sorts the return array by the total comment count of each user.  

// [ { username: "foo",    comment_count: 9 },
//   { username: "foobar", comment_count: 2 } ]

var comments = [
 { "username": "tim",
  "comment": "when you have new workshoppers?" },
 { "username": "cat_lover",
  "comment": "wtf? where are all the cats gone?" },
 { "username": "max",
  "comment": "where have you been on friday? we missed you!" },
 { "username": "max",
  "comment": "Do dont anwer anymore - why?" },
 { "username": "cat_lover",
  "comment": "MORE cats!!!" },
 { "username": "max",
  "comment": "i really love your site" }
];

var _ = require('lodash');

var commentsByUser = function(allComments){
	var totals = [];
	var byUser = _.groupBy(allComments, 'username');

	_.forEach(byUser, function(comments, username){
		totals.push({
			username: username,
			comment_count: _.size(comments)
		});
	});

	return _.sortBy(totals, 'comment_count').reverse();
};

// console.log(commentsByUser(comments))

module.exports = commentsByUser;
