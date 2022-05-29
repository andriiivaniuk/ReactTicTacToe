/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Square } from '../../components/Square/Square';
import { Field } from '../../components/Field/Field';
import {ResetButton} from '../../components/ResetButton/ResetButton';

class App extends React.Component {

constructor(){
  super()
  this.state = {};
}

resetClick = () => {
  console.log("reset");
  this.game[0] = <Field key = {Math.random()} ></Field>;
  this.setState({});
}

game = [<Field key = {Math.random()} ></Field>];

render() {
    return (
      <div className="App">
       {this.game[0]}
       <ResetButton onClick = {() => this.resetClick()} ></ResetButton>
      </div>
    );
  }
}

export default App;
