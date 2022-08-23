import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CalculatorPage from './pages/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          {/* <Route path="quote" element={<QuotePage />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;
