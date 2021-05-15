import React from 'react';
import CounterDisplay from "./CounterDisplay";
// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }
  componentDidMount(){
    console.log('declarando counter inicial')
    this.setState({
      counter: 10
    })
  }

  render() {
    console.log('inside render')
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}
export default App;