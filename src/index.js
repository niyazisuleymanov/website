import React from "react";
import ReactDOM from "react-dom/client";

import CRUX4677 from "./assets/Niyazi Suleymanov - CRUX 4677.pdf";
import Publication from "./assets/Crux Mathematicorum - Volume 48 - Issue 3 - March.pdf";
import Problem from "./assets/I. A. Maron - Problems in Calculus of One Variable - Problem 6.8.14.pdf";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Niyazi Suleymanov</h1>
      
        <h2>Journal Problems</h2>
        <p>
          <a href={CRUX4677} target="_blank">
            Crux Mathematicorum - 4677
          </a>
        </p>

        <a href={Publication} target="_blank">
          Published in Crux Mathematicorum - Volume 48 - Issue 3 - March.pdf 
        </a>

        <h2>Random Problems</h2>
        <p>
          <a href={Problem} target="_blank">
            I. A. Maron - Problems in Calculus of One Variable - Problem 6.8.14
          </a>
        </p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);