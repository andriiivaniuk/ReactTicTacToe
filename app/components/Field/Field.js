import React, { Component } from 'react';
import './Field.css';

import { Square } from "../Square/Square";
import { Header } from '../Header/Header';
import { CrossingLine } from '../CrossingLine/CrossingLine';

export class Field extends Component {

  constructor(props) {
    super(props);

      this.squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      this.state = {
        winner: "",
        gameOver: false,
        player: "X",
        turn: 0,  
      }
  }

  inputPossible = true;

  crossingLine;

  squareState = {
      1: null,
    2: null,
      3: null, 
    4: null,
      5: null,
    6: null,
      7: null,
    8: null,
      9: null
  };

  winningPositions = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,5,9],
      [3,5,7],
      [1,4,7],
      [2,5,8],
      [3,6,9],
  ];


  changeSquaresState = (id, player) => {

    
    this.changeTurnFunc();
    this.squareState[id] = player;

      if(this.state.turn > 3 ){
        this.checkGameStatus();
      }
  };

  checkGameStatus = () => {
      if(this.state.turn === 8){
        this.setGameOver("DRAW", "none");
      }

      for(let i = 0; i < this.winningPositions.length; i++){
        if (this.winningPositions[i].every(
          x => this.squareState[x] !== null))
        {
          if (this.winningPositions[i].every(x => this.squareState[x] === "X")){
            this.setGameOver("X", this.winningPositions[i]);
          break;
          }
          if (this.winningPositions[i].every(x => this.squareState[x] === "O")){
            this.setGameOver("O", this.winningPositions[i]);
            break;
          }
      }
    }
  };

  setGameOver = (winner, winningCombo) => {
      if(winner === "DRAW"){

      this.inputPossible = false;

      this.setState({
        winner: "Nobody",
        gameOver: true,
        turn: "GAME OVER"
      })

      console.log(`${winner  } wins`);
    }
      
      if(winner === "X" || winner === "O"){
        this.inputPossible = false;

        this.setState({
          winner: winner,
          gameOver: true,
          turn: "GAME OVER"
        })

        console.log(`${winner  } wins`);

        this.addCrossingLine(winningCombo);
      }
  };

  changeTurnFunc = () => {
      
      if(this.state.player === "X"){
        this.setState({
          winner: "",
          gameOver: false,
          player: "O",
          turn: this.state.turn + 1,

        });
      } 
      else{
          this.setState({
            winner: "",
            gameOver: false,
            player: "X",
            turn: this.state.turn + 1,
            
        });
      } 
      
  };

  addCrossingLine = winningCombo => {
      this.crossingLine = <CrossingLine winningCombo = {winningCombo} ></CrossingLine>
  };

  render() {
      return(
      <>
        { <Header key = {`header${ this.state.turn}`} gameOver = {this.state.gameOver} turn = {this.state.turn} player = {this.state.player} winner = {this.state.winner}/> }
        <div className="field">
          
          {this.squares.map( x => {
            return <Square
              key = {x} id = {x} turn = {this.state.turn}
              changePlayerFunc = {this.changeTurnFunc}
              changeSquaresState = {this.changeSquaresState}
              gameOver = {this.state.gameOver} >
               </Square>
          })}
          
          {this.crossingLine}
        </div>
      </>
      )
  }
}
