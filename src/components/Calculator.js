import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const result = calculate(this.state, e.target.innerText);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;

    const display = () => {
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
            <div name="display" className="display" id="display">{display()}</div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">AC</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">+/-</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">%</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">÷</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">7</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">8</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">9</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">x</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">4</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">5</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">6</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">-</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">1</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">2</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">3</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">+</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">0</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">.</button></div>
            <div className="btn"><button type="button" onClick={this.onClickHandler} className="btn-front">=</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
