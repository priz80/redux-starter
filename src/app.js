import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return React.createElement(
    "div",
    { style: { padding: "20px" } },
    React.createElement("h1", null, "React + Webpack (без Babel)"),
    React.createElement("p", null, "Счётчик: ", count),
    React.createElement(
      "button",
      { onClick: () => setCount((c) => c + 1) },
      "Increment",
    ),
  );
}

export default App;