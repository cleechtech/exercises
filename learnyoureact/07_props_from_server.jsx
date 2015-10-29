// In this code, TodoBox is the parent of all other components, so the server
// will pass data into it, which it can access as {this.props.data}, and then
// pass on down to TodoList.

// In TodoList, we'll need to stop passing static values into our Todo
// components. Instead, we'll loop through all of the values we're passed and
// dynamically create Todo components for each. When dynamically creating
// components like this, React makes use of a key attribute to keep track of
// each component in the VirtualDOM. This allows it to update the real DOM as
// sensibly and infrequently as possible. If you do not use key, React will
// print a Warning in the console.

var React = require('react');

var TodoBox = React.createClass({
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // Omitted
});

var TodoForm = React.createClass({
  // Omitted
});

var style = {
  // Omitted
};

module.exports = TodoBox;