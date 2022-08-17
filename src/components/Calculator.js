import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator-placeholder" className="calculator-placeholder">
        <h1>Tito&apos; Calculator</h1>
        <div id="calculator" className="calculator">
          <input type="text" name="input" className="btn input" id="input" />
          <input type="button" className="btn" value="AC" />
          <input type="button" className="btn" value="+/-" />
          <input type="button" className="btn" value="%" />
          <input type="button" className="btn operator" value="÷" />
          <input type="button" className="btn" value="7" />
          <input type="button" className="btn" value="8" />
          <input type="button" className="btn" value="9" />
          <input type="button" className="btn operator" value="x" />
          <input type="button" className="btn" value="4" />
          <input type="button" className="btn" value="5" />
          <input type="button" className="btn" value="6" />
          <input type="button" className="btn operator" value="-" />
          <input type="button" className="btn" value="1" />
          <input type="button" className="btn" value="2" />
          <input type="button" className="btn" value="3" />
          <input type="button" className="btn operator" value="+" />
          <input type="button" className="btn" value="0" />
          <input type="button" className="btn" value="." />
          <input type="button" className="btn operator" value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
