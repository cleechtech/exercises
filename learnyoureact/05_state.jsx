
// this.state is private to each component and allows us to define mutable
// values. Let's set the initial value of checkbox to false and define
// a function to control the behavior of check events.

// Write code to set the initial value of checked and define handleChange.
// You can set the initial value of checked in a special getInitialState function.
// Within handleChange, you should update the component's state by using this.setState.

var Todo = React.createClass({

  // set inital state to
  getInitialState: function(){
    return {
      checked: false
    };
  },
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  // custom method
  handleChange: function(e){
    this.setState({
      checked: e.target.checked
    });
  },
  render: function() {
    return (
      <tr>
        <td style={{border: "1px solid black"}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={{border: "1px solid black"}}>{this.props.title}</td>
        <td style={{border: "1px solid black"}}>{this.props.children}</td>
      </tr>
    );
  }
});