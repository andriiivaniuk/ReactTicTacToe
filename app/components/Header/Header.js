import React, { Component, useState } from 'react';
import './Header.css';

export class Header extends Component {
  turn = '';

  player = '';

  gameOver = false;

  info = '';

  constructor(props) {
    super(props);

    if (this.props.gameOver) {
      this.info = `Game over! ${this.props.winner} wins!`;
    } else {
      this.info = `${this.props.player[0]} turn!`;
    }

    this.state = {};
  }

  componentDidUpdate = () => {
    if (!this.props.gameOver) {
      this.info = `${this.props.player[0]} turn!`;
    }
  };

  render() {
    return (
      <>
        <header className="header">{this.info}</header>
      </>
    );
  }
}
