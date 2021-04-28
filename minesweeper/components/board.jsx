import React from 'react';
import * as Minesweeper from './minesweeper';
import Tile from './tile';

class Board extends React.Component{
  constructor(props) {
    super(props);


    
  }

  mapOut() {
    // each row has key corresponding to row number
    // each tile has key corresponding to row, col indices

    const grid = this.props.board.grid;
    return grid.map((row, idx1) => {
      let eachRow = (
        row.map((ele, idx2) => {
          return (
            <div key={[idx1, idx2]}>
              <Tile tile={ele} updateGame={this.props.updateGame}/>
            </div>
          )
        })
      )
      // console.log(row)
      return <div className="row" key={idx1}>{eachRow}</div>
    })
  

  }

  render() {

    let gridEle = this.mapOut();
    // return OCmponient tree
    return(
      <div className="board">
        {gridEle}
      </div>
    )
  }
}

// {row.forEach((ele, idx2) => {
//   return <Tile key={[idx, idx2]}/>

export default Board;
