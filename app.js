class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      found: false
    };
  }

  onListItemEnter() {
    this.setState({
      found: true
    });
  }
  onListItemLeave() {
    this.setState({
      found: false
    });
  }

  render() {

    var style = {
      textDecoration: this.state.found ? 'line-through' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onListItemEnter.bind(this)} onMouseOut={this.onListItemLeave.bind(this)}>{this.props.item}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
<div>
  <h2>My Grocery List</h2>
  <GroceryList items={['Apples', 'Oranges', 'Bananas']}/>
</div>
);

ReactDOM.render(<App />, document.getElementById("app"));