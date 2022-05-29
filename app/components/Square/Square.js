import React, { Component } from "react";
import "./Square.css"

export class Square extends Component{

    constructor(props){
        super(props)
        this.state = {};
    }

    id = this.props.id;
    className = "square";
    clicked = false;
    value = "";

    clickHandle = () => {
        if(this.props.turn[0] === "GAME OVER"){
            return;
        }

        if(this.clicked === false){
            console.log(this.props.gameOver);
            console.log("id: " + this.id + ", turn " + this.props.turn);

            this.clicked = true;
            this.className = "square-clicked";

            if(this.props.turn  % 2 === 0){
                this.value = "X";
            }
            else{
                this.value = "O";
            }

            this.props.parentStateFunc();
            this.props.changePlayerFunc();
            this.props.changeSquaresState(this.id, this.value);

            this.setState({});
        }
    }
    
    render(){
        return(
            <div className = {this.className} onClick = {this.clickHandle}>{this.value}</div>
        )
    }
}