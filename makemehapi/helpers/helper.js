
module.exports = function(context){
	var name = context.data.root.query.name;
	var suffix = context.data.root.query.suffix;

	// must return string
	return name + suffix
}