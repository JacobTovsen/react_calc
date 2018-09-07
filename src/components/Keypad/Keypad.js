import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstValue: '',
      mathOperator: '',
      secondValue: '',
      answer: 0,
    }
  }

  handleFirstInputChange = (event) => {
    this.setState({
      firstValue: event.target.value
    })
    console.log(this.state.firstValue);
  }

  handleSecondInputChange = (event) => {
    this.setState({
      secondValue: event.target.value
    })
    console.log(this.state.SecondValue);
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
        let mathPlus = Number(firstValue) + Number(secondValue);
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
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      firstValue: '',
      mathOperator: '',
      secondValue: ''
    })
  }

  clearAll = () => {
    this.setState({
      firstValue: '',
      mathOperator: '',
      secondValue: '',
      answer: 0,
    })
  }

  handleInputChange = (number) => {
    console.log('in handle input change', number);
      if(this.state.mathOperator === ''){
        this.setState({
          firstValue: number
        })
      } else {
        this.setState({
          secondValue: number
        })
      }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="Enter First Value" type="number" value={this.state.firstValue} onChange={this.handleFirstInputChange}/>
          <button onClick={ () => this.setOperator("+")}>+</button>
          <button onClick={ () => this.setOperator("-")}>-</button>
          <button onClick={ () => this.setOperator("*")}>*</button>
          <button onClick={ () => this.setOperator("/")}>/</button>
          <input placeholder="Enter Second Value" type="number" value={this.state.secondValue} onChange={this.handleSecondInputChange}/>
          <button onClick={ () => this.runMath()}>=</button>
          <button onClick={this.clearAll}>C</button>
          {/* <form>Answer: {this.state.firstValue} {this.state.mathOperator} {this.state.secondValue} = {this.state.answer}</form> */}
          <form>Answer: {this.state.answer}</form>
        </div>
        <div>
          <br></br>
          <hr></hr>
          <br></br>
          <form>{this.state.answer}</form>
          <button onClick={ () => this.handleInputChange(1)}>1</button>
          <button onClick={ () => this.handleInputChange(2)}>2</button>
          <button onClick={ () => this.handleInputChange(3)}>3</button>
          <button onClick={ () => this.setOperator("/")}>/</button>
          <br></br>
          <button onClick={ () => this.handleInputChange(4)}>4</button>
          <button onClick={ () => this.handleInputChange(5)}>5</button>
          <button onClick={ () => this.handleInputChange(6)}>6</button>
          <button onClick={ () => this.setOperator("*")}>*</button>
          <br></br>
          <button onClick={ () => this.handleInputChange(7)}>7</button>
          <button onClick={ () => this.handleInputChange(8)}>8</button>
          <button onClick={ () => this.handleInputChange(9)}>9</button>
          <button onClick={ () => this.setOperator("+")}>+</button>
          <br></br>
          <button onClick={ () => this.handleInputChange(0)}>0</button>
          <button onClick={ () => this.handleInputChange('.')}> . </button>
          <button onClick={ () => this.runMath()}>=</button>
          <button onClick={ () => this.setOperator("-")}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
