import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(props) {
    super(props);
    // console.log('game constructed')

    this.state = {
      board: new Minesweeper.Board(10, 70)
    }
    this.updateGame = this.updateGame.bind(this);
  }
  
  updateGame() {
    // return 'hello'
  }


  render() {

    return (
      <div >
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

export default Game;