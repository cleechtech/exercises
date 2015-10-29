var style = {
  tableContent: {
    border: "1px solid black"
  }
};

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
    var self = this;
    return (
      <tr>
        <td style={style.tableContent}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} /></td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});