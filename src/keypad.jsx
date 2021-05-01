
import React,{Component} from "react";
import Button from "./Button"

class Keypad extends Component{
    render(){
       const  keys=[1,2,3,4,5,6,7,8,9,0,"+","-","/","*","="]
       
    return(
        //<div className="keypad">
        //{keys.map (e =><Button key={e} value={e} onChange={this.props.onChange} onEqualClick={this.props.onEqualClick}>{e}</Button>
      // </div>
      // );
      <div className="keypad">
          {keys.map(e=><Button key={e} value={e} onChange={this.props.onChange} onEqualClick={this.props.onEqualClick}>{e}</Button>)}
      </div>);
    }
    
}

export default Keypad;