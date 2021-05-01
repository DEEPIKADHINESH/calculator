import React,{Component} from "react";
import Keypad from "./keypad";
import Screen from "./Screen";
import "./index.css";
import {evaluate} from "mathjs";
class App extends Component{
constructor(){
super()
  this.state ={
    expression: ''
  }
  }
  handleExpressionChange=(value)=>{
    this.setState({expression:this.state.expression + value.toString()})
  }
  handleEqualClick=()=>{
    this.setState({expression:evaluate(this.state.expression)})
  };

  render() {
    return(
       <div>
         <Screen expression={this.state.expression} />
         <Keypad expression={this.state.expression} onChange={this.handleExpressionChange} onEqualClick={this.handleEqualClick}/>
         
       </div>
    );
  }
}

  export default App;

