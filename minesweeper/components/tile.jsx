import React from 'react';
import * as Minesweeper from './minesweeper';

class Tile extends React.Component{
  constructor(props) {
    super(props);
    // console.log(this.props);
    // console.log(this.props.tile.bombed)
    this.state = {
      revealed: false
    }
    this.sym = this.sym.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  sym() {
    const flagUni = '⚑'
    const bomb = "💣"
    const revealed = ''
    let tile = this.props.tileclass;
    if (tile.bombed && this.state.revealed){
      return bomb;
    } else if (tile.explored) {
      return tile.adjacentBombCount();
    } else if (tile.flagged) {
      return flagUni;
    } else {
      return '';
    }
  }

  handleClick(e) {
    let altClick = false // need alt  click
    if (e.altKey){
      console.log('alt clicked')
      altClick = true;
      e.target.classList.add("flagged");
    } else {
      e.target.classList.add("revealed");
    }
    
    let tilePOJO = this.props.tileclass;
    this.props.updateGame(tilePOJO, altClick)
    this.setState({revealed: true})
    
  }


  render() {
    const symbol = this.sym();
    let curTile = this.props.tileclass
    let tileClass = 'tile';
    console.log(curTile)
    if (curTile.explored) titleClass = 'revealed'
    return(
      
      <div className={tileClass} onClick={this.handleClick}>
        {/* {flagUni}
        {bomb}
        {revealed} */}
        {symbol}
      </div>
    )
  }
}

export default Tile;