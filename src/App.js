import React from 'react';
import './App.css';
import Calculator from './Calculator';
import CalculatorAPI from './CalculatorAPI';

function App() {
  return (
    <div className="App">
      <Calculator calculatorAPI={new CalculatorAPI("https://lm-enjoyed-arthur-reasoning.trycloudflare.com")}/>
      <div style={{position: "fixed", bottom: "1%", right: "1%", color: "black", fontSize: "15px"}}>
        Still under development
        by 
        <a href="https://abubow.me" style={{textDecoration: "none", color: "blue"}}>
          {" "}Abuzar
        </a>
      </div>
    </div>
  );
}

export default App;
