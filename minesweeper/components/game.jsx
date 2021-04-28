import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component{
  constructor(props) {
    super(props);
    // console.log('game constructed')

    this.state = {
      board: new Minesweeper.Board(10, 5)
    }
    this.updateGame = this.updateGame.bind(this);
    this.gameEnd = this.gameEnd.bind(this);
  }
  
  updateGame(tile, altClick) {
    console.log(tile);
    if (altClick) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board})
  }

  gameEnd() {
    let board = this.state.board;
    let returnStr = '';
    if (board.lost()) {
      returnStr = "YOU LOST!";

    } else if (board.won()) {
      returnStr = "YOU WIN!";
    }
    return returnStr;
  }


  render() {

    return (
      <div >
        <h1>{this.gameEnd()}</h1>
        <Board board={this.state.board} updateGame={this.updateGame}/>
      </div>
    )
  }
}

export default Game;