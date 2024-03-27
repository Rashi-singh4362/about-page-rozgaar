// src/App.js

import React from 'react';
import Navbar from './Navbar/navbar.js';
import Footer from './Footer/footer.js';
import AboutUs from './AboutUs/aboutus.js';
import './App.css'; // Assuming you have some CSS file for styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

