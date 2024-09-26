
/*import React from 'react';
import Animatedtext from './Animatedtext'; // Import the Animatedtext component
import { color } from 'framer-motion';

const Homepage = () => {
  return (
    <div
      style={{
        backgroundColor: 'darkgrey',
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
      }}
    >
    
      
      
     <Animatedtext />
     *Include the Animatedtext component on the homepage */

//const { RiAnchorFill } = require("react-icons/ri");

      /* Add more content of the homepage here *
    </div>
  );
};

export default Homepage;*/

import React from 'react';
import { Link } from 'react-router-dom'; 
import Animatedtext from './Animatedtext';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Footer from './Footer';
const Homepage = () => {
  return (
    <div
      style={{
      
        height: '100%',
        width: '100vw',
        color: 'white', // Example text color
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Navbar />
      <Animatedtext />
      {/* Add more content here */}
      <MainSection />
{/* Add Payment Button */}
<div style={{ marginTop: '20px' }}>
        <Link to="/payment">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#6772e5',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Proceed to Payment
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  )
}
export default Homepage;


/*import React from 'react';
import Navbar from './Navbar';

 const Homepage = () => {
  return <Navbar />
 };
 export default Homepage;*/
