//*What Is React?
//-React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
//It lets you compose complex UIs from small and isolated pieces of code called “components”.

//-We use components to tell React what we want to see on the screen. When our data changes, 
//React will efficiently update and re-render our components.

//-The render method returns a description of what you want to see on the screen. React takes the description and displays the result.

//-In particular, render returns a React element, which is a lightweight description of what to render. Most React developers use a 
//special syntax called “JSX” which makes these structures easier to write.

//-JSX comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.
//Each React element is a JavaScript object that you can store in a variable or pass around in your program.

//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button className="square">{/* TODO */}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
