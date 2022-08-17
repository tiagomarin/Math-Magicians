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
    const result = calculate(this.state, e.target.value);
    this.setState(result);
  };

  render() {
    const { total, next } = this.state;
    return (
      <div id="calculator-placeholder" className="calculator-placeholder">
        <h1>Tito&apos; Calculator</h1>
        <div id="calculator" className="calculator">
          <input type="text" name="input" className="btn input" id="input" value={next || total} />
          <input onClick={this.onClickHandler} type="button" className="btn" value="AC" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="+/-" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="%" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="÷" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="7" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="8" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="9" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="x" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="4" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="5" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="6" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="-" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="1" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="2" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="3" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="+" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="0" />
          <input onClick={this.onClickHandler} type="button" className="btn" value="." />
          <input onClick={this.onClickHandler} type="button" className="btn" value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
