import React from 'react';
import './App.css';
import Calculator from './Calculator';
import CalculatorAPI from './CalculatorAPI';

function App() {
  return (
    <div className="App">
      <Calculator calculatorAPI={new CalculatorAPI("http://0.0.0.0:18080")}/>
      <div>
        Still under development
        by <a href="https://abuzar.netlify.app">Abuzar</a>
      </div>
    </div>
  );
}

export default App;
