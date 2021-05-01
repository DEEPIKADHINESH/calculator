import React,{Component} from "react";

class Button extends Component{
    
   handleClick=()=>{
      if(this.props.value === "="){
           this.props.onEqualClick();
           return;
      }
           //console.log(this.props.value);
           this.props.onChange(this.props.value);
   };
    render(){
        return(
            (<div className={`button ${this.props.value === '=' ? 'equal' : ''}`} onClick={this.handleClick}>{this.props.value}</div>)
        )};

}


export default Button;