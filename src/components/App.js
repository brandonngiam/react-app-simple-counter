import React from "react";
import Counter from "./Counter";
import "../styles/App.css";

function App() {
  const counters = [
    { id: "123", initialCount: 0 },
    { id: "124", initialCount: 1 },
    { id: "125", initialCount: 2 },
    { id: "126", initialCount: 3 }
  ];

  //creates a list of React elements/components
  const counterItems = counters.map(x => {
    return <Counter key={x.id} initial={x.initialCount} />;
  });

  return <React.Fragment>{counterItems}</React.Fragment>;
}

// const element = <Counter />;
export default App;
