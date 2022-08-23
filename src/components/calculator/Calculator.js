import React, { useState } from 'react';
import Display from './Display';
import OnOff from './OnOff';
import CalculatorKey from './CalculatorKey';
import calculate from '../../logic/calculate';
import './Calculator.css';

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
    <>
      <h2 className="tilte-calc-page"> Let&apos;s do some math! </h2>
      <div id="calculator-placeholder" className="calculator-placeholder">
        <div className="calculator-body">
          <div id="calculator" className="calculator">
            <div className="top">
              <OnOff />
              <h2 className="calc-title" title="Tito&apos;s Calculator">
                Tito&apos;s
                <br />
                Calculator
              </h2>
            </div>
            <Display total={total} next={next} operation={operation} />
            {btnsText.map((btn, x = `"btn: "${btn}`) => (
              <CalculatorKey key={x} btnText={btn} keyClickHandler={keyClickHandler} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
