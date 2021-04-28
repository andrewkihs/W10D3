//entry
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game'


document.addEventListener("DOMContentLoaded",() => {
  const root = document.getElementById("root");
  console.log(root);
  ReactDOM.render(<div><Game/></div>, root);
})