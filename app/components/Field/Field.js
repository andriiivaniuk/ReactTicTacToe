import React, { Component } from "react";
import "./Field.css"

import { Square } from '../../components/Square/Square';
import { Header } from "../Header/Header";
import { CrossingLine } from "../CrossingLine/CrossingLine";

export class Field extends Component{
 
    squares = [];
    turn = [0];
    player = ["X"];
    inputPossible = true;
    gameOver = false;
    winner = "";
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
    }

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
    
    
    header = [ <Header key = "header" gameOver = {this.gameOver} turn = {this.turn} player = {this.player}/> ];

    changeSquaresState = (id, player) => {
        this.squareState[id] = player;

        if(this.turn > 3 && !this.gameOver){
            this.checkGameStatus();
        }
    }

    checkGameStatus = () => {
        if(this.turn[0] === 9){
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
    }

    setGameOver = (winner, winningCombo) =>{ 
        if(winner === "DRAW"){
            this.inputPossible = false;
            this.gameOver = true;
            this.turn[0] = "GAME OVER";
            console.log("DRAW!");
            this.winner = "Nobody";
            this.header = [ <Header key = {"header" + this.turn} gameOver = {this.gameOver} turn = {this.turn} player = {this.player} winner = {this.winner}/> ];
        }
        
        if(winner === "X" || winner === "O"){
            this.inputPossible = false;
            this.gameOver = true;
            this.winner = winner;

            this.turn[0] = "GAME OVER";
            console.log(winner + " wins");
            
            this.header = [ <Header key = {"header" + this.turn} gameOver = {this.gameOver} turn = {this.turn} player = {this.player} winner = {this.winner}/> ];

            this.addCrossingLine(winningCombo);
        }
    }

    changeTurnFunc = () => {
        this.turn[0]++;
        this.header = [ <Header key = {"header" + this.turn} gameOver = {this.gameOver} turn = {this.turn} player = {this.player}/> ];
    }

    changeStateFunc = () => {
        if(this.player[0] === "X"){
            this.player[0] = "O";
        } 
        else{
            this.player[0] = "X";
        } 

        this.setState({});
    }

    addCrossingLine = (winningCombo) => {
        this.crossingLine = <CrossingLine winningCombo = {winningCombo} ></CrossingLine>
    }

    constructor(props){
        super(props);

        this.state = {};

        for(let i = 0; i < 9; i++){
            let square = <Square 
                key = {i} id = {i + 1} turn = {this.turn} 
                changePlayerFunc = {this.changeTurnFunc} 
                parentStateFunc = {this.changeStateFunc}
                changeSquaresState = {this.changeSquaresState}
                gameOver = {this.gameOver} >
                </Square>;
            this.squares.push(square);
        }

    }    


    render(){
        return(
            <>
                {this.header}
                <div className="field">
                    {this.squares}
                    {this.crossingLine}
                </div>
            </>
        )
    }
}