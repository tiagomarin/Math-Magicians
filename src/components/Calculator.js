import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, calc] = useState(0);
  const { total, next, operation } = state;
  const changeDisplay = () => {
    if (!total && !next && operation) {
      return `${total} ${operation}`;
    }
    if (total && next && operation) {
      return `${total} ${operation} ${next}`;
    }
    if (total && operation) {
      return `${total} ${operation}`;
    }
    if (next) {
      return next;
    }
    if (total) {
      return total;
    }
    return 0;
  };

  return (
    <div id="calculator-placeholder" className="calculator-placeholder">
      <h2 className="calc-title">Tito&apos; Calculator</h2>
      <div className="calculator-body">
        <div id="calculator" className="calculator">
          <div name="display" className="display" id="display">{changeDisplay()}</div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">AC</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">+/-</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">%</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">÷</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">7</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">8</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">9</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">x</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">4</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">5</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">6</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">-</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">1</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">2</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">3</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">+</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">0</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">.</button></div>
          <div className="btn"><button type="button" onClick={(e) => calc(calculate(state, e.target.innerText))} className="btn-front">=</button></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
