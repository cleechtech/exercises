Learn React
===

Install node.js.

```
$ npm init
$ npm install express body-parser express-react-views node-jsx react react-dom --save
```

Make a simple server:

```
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {
    console.log('Server started on port ', app.get('port'), '...');
});
```

Create a view page in `views/index.jsx`:

```
var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        Hello, world!
      </div>
    );
  }
});

module.exports = TodoBox;
```

You can pass components into other components:

```
var React = require('react');
    
var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function(){
  	return (
  		<div className= "todoList">
      		I am a TodoList.
    	</div>
  	);
  }
});

var TodoForm = React.createClass({
  render: function(){
  	return (
  		<div className= "todoForm">
    		I am a TodoForm.
    	</div>
  	);
  }
});

module.exports = TodoBox;
```

