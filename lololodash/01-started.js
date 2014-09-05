// write a function that takes such a list as its first argument and give back only
// the active users (active === true)
var _ = require("lodash"),
	dummyData = [
		{ id: 22, username: "martin", active: true},
		{ id: 23, username: "max",    active: false},
		{ id: 24, username: "linda",  active: false}
	];

var getActiveUsers = function(users) {
    
    return _.where(users, { active: true })
};

// getActiveUsers(dummyData)

module.exports = getActiveUsers;