import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Parent from "./Parent";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
  Concept of creating and updating in react

  const Tick = () => {
   let component = (
    <div>
      <h2>Ticking clock</h2>
      <div>Current time {new Date().toLocaleTimeString()}</div>
    </div>
   );
   root.render(component);
};
  
  setInterval(Tick, 1000);
*/

root.render(<Parent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
