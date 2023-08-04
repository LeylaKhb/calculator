import React from 'react';
import './App.css';
import CalcFrame from "./components/calculator_frame/CalcFrame";
import Calculator from "./models/Calculator";

function App() {
  return (
      <div>
          <CalcFrame calc={new Calculator()}></CalcFrame>
      </div>
  );
}

export default App;
