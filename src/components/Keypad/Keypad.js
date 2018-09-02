import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstValue: 0,
      mathOperator: '',
      secondValue: 0,
    }
  }


  firstValue = (value) =>  {
    this.setState({
      firstValue: value
    })
    console.log('in firstValue', value);
  }

  setOperator = (operator) => {
    this.setState({
      mathOperator: operator
    })
    console.log('in setOperator', operator);
  }

  runMath = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form></form>
        <button onClick={ () => this.firstValue(1)}>1</button>
        <button onClick={ () => this.firstValue(2)}>2</button>
        <button onClick={ () => this.firstValue(3)}>3</button>
        <button onClick={ () => this.setOperator('/')}>/</button>
        <br></br>
        <button onClick={ () => this.firstValue(4)}>4</button>
        <button onClick={ () => this.firstValue(5)}>5</button>
        <button onClick={ () => this.firstValue(6)}>6</button>
        <button onClick={ () => this.setOperator('*')}>*</button>
        <br></br>
        <button onClick={ () => this.firstValue(7)}>7</button>
        <button onClick={ () => this.firstValue(8)}>8</button>
        <button onClick={ () => this.firstValue(9)}>9</button>
        <button onClick={ () => this.setOperator('+')}>+</button>
        <br></br>
        <button onClick={ () => this.firstValue(0)}>0</button>
        <button onClick={ () => this.firstValue('.')}> . </button>
        <button onClick={ () => this.runMath()}>=</button>
        <button onClick={ () => this.setOperator('-')}>-</button>
      </div>
    );
  }
}

export default App;
