/*import React from 'react';
import { motion } from 'framer-motion';

const Animatedtext = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}        // Initial state: invisible and 50px below
      animate={{ opacity: 1, scale: 1 }}         // Animate to: fully visible and at original position
      transition={{ duration: 2, ease: "easeOut" }}  // Animation duration and easing
    >
      Welcome to React Demo
    </motion.h1>
  );
};

export default Animatedtext;






import React from 'react';
import { motion } from 'framer-motion';

const HoverButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: '#f39c12' }}
      whileTap={{ scale: 0.9 }}
      style={{
        display: 'flex',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#e74c3c',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
      }}
    >
      Hover Me
    </motion.button>
  );
};

export default HoverButton;

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedElements = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        Welcome to React Demo
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}



        
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#4169E1',
          borderRadius: '8px',
          display: 'inline-block',
        }}
>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Explore the world by just one click
        </motion.p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          marginTop:'30px',
          justifycontent: 'center',
          aligncontent: 'center',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'black',
          border: 'none',
          borderRadius: '5px',
          color: '#ffff',
        }}
      >
        Click Me!
        
    </motion.button>
  
    

    </div>
  );
};

export default AnimatedElements;*/

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedElements = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        Welcome to React Demo
      </motion.h1>

      
    </div>
  );
};

export default AnimatedElements;
