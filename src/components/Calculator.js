import React, { useState } from 'react';
import CalculatorKey from './CalculatorKey';
import Display from './Display';
import calculate from '../logic/calculate';

const btnsText = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

const Calculator = () => {
  const [state, setState] = useState(0);

  const { total, next, operation } = state;

  const keyClickHandler = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  return (
    <div id="calculator-placeholder" className="calculator-placeholder">

      <div className="calculator-body">
        <div id="calculator" className="calculator">
          <div className="top">
            <div className="btn"><button type="button" className="btn-front">On / Off</button></div>
            <h2 className="calc-title" title="Tito&apos;s Calculator">Tito&apos;s Calculator</h2>
          </div>
          <Display total={total} next={next} operation={operation} />
          {btnsText.map((btn, x = `"btn: "${btn}`) => (
            <CalculatorKey key={x} btnText={btn} keyClickHandler={keyClickHandler} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
