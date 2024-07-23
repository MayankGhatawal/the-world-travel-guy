import React from 'react';
import './App.css';
import video from '../src/Images/12.mp4'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import Travelguide from './components/Travelguide';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="App-header">
        <h1>EXPLORE. DREAM. DISCOVER.</h1>
        <p>
          This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe.
        </p>
        <p>Please tag along!</p>
        <button className="explore-button">START EXPLORE</button>
      </header>

    </div>
    <HomePage />
    <Travelguide />
    <Footer />
    </>
  );
}

export default App;
