import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.testeClique2 = this.testeClique2.bind(this);
    this.testeClique1 = this.testeClique1.bind(this);

    this.state = {
      clickNumber: 0,
      clickNumber1: 0,
      clickNumber2: 0
    }

  }
  testeClique = (e) => {
    this.setState((valorAtual, _props) => ({
      clickNumber: valorAtual.clickNumber + 1
    }))
    if(this.state.clickNumber% 2 !== 0) {
      console.log(e.target.style.backgroundColor = 'green');
    } else {
      e.target.style.backgroundColor = 'red'
    }
  }
  testeClique1() {
    this.setState((valorAtual, _props) => ({
      clickNumber1: valorAtual.clickNumber1 + 2
    }))
  }
  testeClique2() {
    this.setState((valorAtual, _props) => ({
      clickNumber2: valorAtual.clickNumber2 + 10
    }))
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.testeClique(e)}>{this.state.clickNumber}</button>
        <button onClick={this.testeClique1}>{this.state.clickNumber1}</button>
        <button onClick={this.testeClique2}>{this.state.clickNumber2}</button>
      </div>
    )
  }
}
export default App;
