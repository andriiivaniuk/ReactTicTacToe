import React, { Component } from 'react';
import './CrossingLine.css';

export class CrossingLine extends Component {
  constructor(props){
    super(props)

    this.winningCombo = this.props.winningCombo.join("");
    console.log(this.winningCombo);

    this.setPosition();
  }

  classString = 'crossing-line';

  setPosition = () => {
      switch(this.winningCombo){
        case ("123") :
          this.classString += " onetwothree"
        break;
        case ("456") :
          break;        
        case ("789") : 
          this.classString += " seveneightnine";
        break;
        case ("159") : 
          this.classString += " onefivenine";
        break;
        case ("357") : 
          this.classString += " threefiveseven";
        break;
        case ("147") : 
          this.classString += " onefourseven";
        break;
        case ("258") : 
          this.classString += " twofiveeight";
        break;
        case ("369") : 
          this.classString += " threesixnine";
        break;
    }
  };

  render() {
      return(
        <div className= {this.classString}>

        </div>
      )
  }
}
