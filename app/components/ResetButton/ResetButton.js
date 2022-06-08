import React, { Component } from 'react';
import './ResetButton.css';

export class ResetButton extends Component {
  render() {
    return (
      <button className="reset-btn" onClick={this.props.onClick}>
        Reset
      </button>
    );
  }
}
