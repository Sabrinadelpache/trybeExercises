import React from 'react';
// CounterDisplay.js
class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('counter dsplay phase')
    if (nextProps.value % 3 !== 0) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}
export default CounterDisplay;