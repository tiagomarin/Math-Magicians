import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/Quote';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Routes>
        <Footer />
      </main>
    );
  }
}

export default App;
