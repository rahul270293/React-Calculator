import React, { Component } from 'react';
import './App.css'
import KeyPad from './Components/keyPad'
import Output from './Components/Output'


class App extends Component  {
   state={
     result: ''
   }
  buttonPressed=buttonName=>{
    if(buttonName=== '='){
      this.calculator()
    } else if(buttonName==='C'){
        this.reset()
    }else if(buttonName==='CE'){
      this.backspace()
    }
    else
    this.setState({
      result: this.state.result + buttonName
    })
  }
 reset=()=>{
   this.setState({
     result:''
   })
 }

 backspace=()=>{
   this.setState({
     result:this.state.result.slice(0,-1)
   })
 }

  calculator=()=>{
    try{
      this.setState({
        result:(eval(this.state.result) ||'') + " "
      })
    }catch(e){
       this.setState({
         result:"error"
       })
    }
    
  }
  
render(){
  return (
    <div className="App">
      <div className="calc-body">
        <div className="calcy"><b>CALCULATOR</b></div>
      <Output result={this.state.result}/>
      <KeyPad buttonPressed={this.buttonPressed}/>
      </div>
      
    </div>
  );
}
  
  
}

export default App;
