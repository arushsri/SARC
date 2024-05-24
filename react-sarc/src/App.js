import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const handleClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <Router>
      <div className="App">
        <nav style={{ backgroundColor: '#333', padding: '10px 10px' }}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, textAlign: 'center', color: 'white' }}>
            <li style={{ display: 'inline', marginRight: '50px', cursor: 'pointer' }} onClick={() => handleClick('Home')}>
              <Link to="/" className="nav-link" style={{ textDecoration: activeNavItem == 'Home' ? 'underline' : 'none' }}>Home</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '50px', cursor: 'pointer' }} onClick={() => handleClick('Portfolios')}>
              <Link to="/portfolio" className="nav-link" style={{ textDecoration: activeNavItem == 'Portfolios' ? 'underline' : 'none' }}>Portfolios</Link>
            </li>
            <li style={{ display: 'inline', marginRight: '50px', cursor: 'pointer' }} onClick={() => handleClick('JoinUs')}>
              <Link to="/JoinUs" className="nav-link" style={{ textDecoration: activeNavItem == 'JoinUs' ? 'underline' : 'none' }}>Join Us!</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/JoinUs" element={<JoinUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
