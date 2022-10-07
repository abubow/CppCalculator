import React from 'react';
import './App.css';
import Calculator from './Calculator';
import CalculatorAPI from './CalculatorAPI';

function App() {
  return (
    <div className="App">
      <Calculator calculatorAPI={new CalculatorAPI("https://124a-34-131-187-2.in.ngrok.io/")}/>
      <div>
        Still under development
        by <a href="https://abuzar.netlify.app">Abuzar</a>
      </div>
    </div>
  );
}

export default App;
