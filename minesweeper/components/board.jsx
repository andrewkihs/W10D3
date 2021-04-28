import React from 'react';
import * as Minesweeper from './minesweeper';
import Tile from './tile';

class Board extends React.Component{
  constructor(props) {
    super(props);


    
  }

  mapOut() {
    const grid = this.props.board.grid;
    console.log(grid);
    return grid.map((row, idx1) => {
      let ele3 = (
        row.map((ele, idx2) => {
          console.log("hello")
          return (
            <div key={idx2}>
              <Tile key={ele} tile={ele} />
            </div>
          )
        })
      )
      debugger
      return ele3;
    })
  

  }

  render() {

    let gridEle = this.mapOut();
    debugger
    // return OCmponient tree
    return(
      <div>
        {gridEle}
      </div>
    )
  }
}

// {row.forEach((ele, idx2) => {
//   return <Tile key={[idx, idx2]}/>

export default Board;
