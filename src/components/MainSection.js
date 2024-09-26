/* MainSection.js
import React from 'react';
import './MainSection.css';
import newsletterImage from '/path-to-image';  Replace with your image path

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="text-content">
        <h1>Subscribe Now to Our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
        <form className="newsletter-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Send</button>
        </form>
      </div>
     
    </section>
  );
};

export default MainSection;*/

import React, { useState, useEffect } from 'react';
import './MainSection.css';
//import newsletterImage from '/path-to-image'; // Uncomment and replace with your image path

const MainSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerId;

    if (isActive) {
      timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000); // Update every second
    } else if (!isActive && seconds !== 0) {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [isActive, seconds]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`Name: ${name}, Email: ${email}`);
    alert('Thank you for subscribing!');

    // Reset form fields
    setName('');
    setEmail('');
  };

  const handleStartPause = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="main-section">
      <div className="text-content">
        <h1>Subscribe Now to Our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>

        {/* Timer controls */}
        <div className="timer">
          <p>Timer: {formatTime(seconds)}</p>
          <button onClick={handleStartPause}>
            {isActive ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>
      
      {/* Uncomment and add your image */}
      {/* <div className="image-content">
        <img src={newsletterImage} alt="Newsletter" />
      </div> */}
    </section>
  );
};

export default MainSection;
