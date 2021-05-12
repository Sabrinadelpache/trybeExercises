import React from 'react';
import './App.css';
import colors from './data.js';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: ''
    };
  }
 setFilterValue = (event) => {
  this.setState({ filter: event.target.value});
 }
  // putColor = ((e, colorValue) => {
  // console.log(colorValue)
  // e.target.style.backgroundColor = colorValue

  // })
  render() {
    console.log(this.state.filter)
    return (
      <div>
        <input type="text" onChange={this.setFilterValue}></input>
        <ul>
          {colors
          .filter(({color}) => color.includes(this.state.filter))
          .map(({ color, value }) => (
            <li key={value}>{color} com o valor {value}</li>
          ))}
        </ul>
        {/* <button key={Math.random} onClick={(e, value) => this.putColor(e, color)}></button> */}
      </div>
    );
  }
}
export default App;
