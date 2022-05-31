import React, { Component } from 'react';
import './Square.css';

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      clicked: false,
      className: 'square'
    };
  }

  id = this.props.id;

  clickHandle = () => {
    if (this.props.turn === 'GAME OVER') {
      return;
    }

    if (this.state.clicked === false) {

      if (this.props.turn % 2 === 0) {
        this.setState({
          value: "X",
          clicked: true,
          className: 'square-clicked'
        }, () => this.props.changeSquaresState(this.id, this.state.value))

      } else {
        this.setState({
          value: "O",
          clicked: true,
          className: 'square-clicked'
        },  () => this.props.changeSquaresState(this.id, this.state.value))
      }
    
    }
  };

  render() {
    return (
      <div className={this.state.className} onClick={this.clickHandle}>
        {this.state.value}
      </div>
    );
  }
}
