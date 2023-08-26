// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// let   count = 120;
// function Time() {
//   const yy = ["one", "two", "three","four","five","six","seven"];
//   const rr = yy.map((ele) => <li key={count++}>{ele}</li>);
//   const kk = <ol>{rr}</ol>;

// root.render(
// <StrictMode>
//   <h1> {kk} </h1>
//   <App />
// </StrictMode>
//   );
// }
//setInterval(Time, 1000);
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
