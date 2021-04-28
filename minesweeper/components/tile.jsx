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
    let tile = this.props.tile;
    if (tile.bombed && this.state.revealed){
      return bomb;
    } else if (tile.explored && this.state.revealed){
      return revealed;
    } else if (tile.flagged) {
      return flagUni
    } else {
      return ''
    }
  }

  handleClick(e) {
    let altClick = false // need alt  click
    if (e.altKey){
      console.log('alt clicked')
      altClick = true;
      target.classList.add("flagged");
    }
    // let tile = this.props.tile;
    this.props.updateGame(this, altClick)
    this.setState({revealed: true})
    
  }


  render() {
    const symbol = this.sym();
    return(
      
      <div className="tile" onClick={this.handleClick}>
        {/* {flagUni}
        {bomb}
        {revealed} */}
        {symbol}
      </div>
    )
  }
}

export default Tile;