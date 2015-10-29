// pass values from a parent component to a child component with props

var React = require('react');
    
var TodoBox = React.createClass({
  // Omitted
});

var TodoList = React.createClass({
  render: function() {
    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  // {this.props.title} == value passed to title attribute
  // {this.props.children} == innerHTML

  // inline styles must be set with javascript objects
  render: function(){
    var todoStyles = {
      title: {
        border: '1px solid black'
      },
      children: {
        border: '1px solid black'
      }
    };
    return (
      <tr>
        <td style={todoStyles.title}>{this.props.title}</td>
        <td style={todoStyles.children}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  // Omitted
});

module.exports = TodoBox;

// Within Todo, you can get the value of the title attribute set in TodoList
// (the parent component) by using {this.props.title}. Likewise, you can get the
// values Milk and 13:00 by using {this.props.children}.

// <div class="todoList">
//   <table style="border:2px solid black;">
//     <tbody>
//       <tr>
//         <td style="border:1px solid black;">Shopping</td>
//         <td style="border:1px solid black;">Milk</td>
//       </tr>
//       <tr>
//         <td style="border:1px solid black;">Hair cut</td>
//         <td style="border:1px solid black;">13:00</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
