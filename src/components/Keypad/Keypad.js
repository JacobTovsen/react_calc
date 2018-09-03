import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstValue: 9,
      mathOperator: '',
      secondValue: 5,
      answer: 0
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
    let firstValue = this.state.firstValue;
    let secondValue = this.state.secondValue;
    let operator = this.state.mathOperator
    switch(operator){
      case '+':
        let mathPlus = firstValue + secondValue;
        console.log(mathPlus);
        this.setState({
          answer: mathPlus
        })
        break;
      case '-':
        let mathMinus = firstValue - secondValue;
        console.log(mathMinus);
        this.setState({
          answer: mathMinus
        })
        break;
      case '*':
        let mathMultiply = firstValue * secondValue;
        console.log(mathMultiply);
        this.setState({
          answer: mathMultiply
        })
        break;
      case '/':
        let mathDivide = firstValue / secondValue;
        console.log(mathDivide);
        this.setState({
          answer: mathDivide
        })
        break;
      default:
        console.log('broken switch!');
    }
  }

  render() {
    return (
      <div>
        <form>{this.state.answer}</form>
        <button onClick={ () => this.firstValue(1)}>1</button>
        <button onClick={ () => this.firstValue(2)}>2</button>
        <button onClick={ () => this.firstValue(3)}>3</button>
        <button onClick={ () => this.setOperator("/")}>/</button>
        <br></br>
        <button onClick={ () => this.firstValue(4)}>4</button>
        <button onClick={ () => this.firstValue(5)}>5</button>
        <button onClick={ () => this.firstValue(6)}>6</button>
        <button onClick={ () => this.setOperator("*")}>*</button>
        <br></br>
        <button onClick={ () => this.firstValue(7)}>7</button>
        <button onClick={ () => this.firstValue(8)}>8</button>
        <button onClick={ () => this.firstValue(9)}>9</button>
        <button onClick={ () => this.setOperator("+")}>+</button>
        <br></br>
        <button onClick={ () => this.firstValue(0)}>0</button>
        <button onClick={ () => this.firstValue('.')}> . </button>
        <button onClick={ () => this.runMath()}>=</button>
        <button onClick={ () => this.setOperator("-")}>-</button>
      </div>
    );
  }
}

export default App;
