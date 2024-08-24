import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import './styles/responsive.css';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Price from './components/Price';
import House from './components/House';
import Explore from './components/Explore'; 
import { getEthereumPrice } from './cryptoService'; // Import your service to get the Ethereum price

function App() {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const price = await getEthereumPrice();
      setEthPrice(price);
    };

    fetchPrice();
    const intervalId = setInterval(fetchPrice, 60000); // Refresh price every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  const marqueeStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
     // Optional: for better visibility
    
    padding: '30px 570px',
    // Optional: padding
  };

  const marqueeContentStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    position: 'absolute',
    willChange: 'transform',
    animation: 'marquee 5s linear infinite',
  };

  const marqueeKeyframes = `
    @keyframes marquee {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <Router>
      <div className="App">
        <header>
          <style>
            {marqueeKeyframes}
          </style>
          <div style={marqueeStyle}>
            <div style={marqueeContentStyle}>
              <p>Current Ethereum Price: ${ethPrice ? ethPrice.toFixed(2) : 'Loading...'}</p>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/house" element={<House />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
