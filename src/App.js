// App.js

/*import React, { useState, useEffect } from 'react';
import Splashscreen from './components/Splashscreen';
import Login from './components/Login';
import Signup from './components/Signup';
import homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} /> {/* Assuming you have a Homepage component 
        </Switch>
        </Router>
      );
    }
    
    export default App;
    // Your main app content component

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Simulate a loading process, e.g., data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true upon successful login
  };

  if (loading) {
    return <Splashscreen />;
  }

  if (!isLoggedIn) {
    return isSignup ? (
      <Signup onSignup={handleSignup} onSwitchToLogin={() => setIsSignup(false)} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
    );
  
  }

  return <Homepage />;
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'; // Assuming you have a Login component
import Homepage from './components/Homepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} /> {/* Assuming you have a Homepage component }
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Splashscreen from './components/Splashscreen';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage'; // Your main app content component

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true upon successful login
  };

  const handleSignup = () => {
    setIsLoggedIn(true); // Set login status to true upon successful signup
  };

  if (loading) {
    return <Splashscreen />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Splashscreen from './components/Splashscreen';
import Loginsign from './components/Loginsign';
import Homepage from './components/Homepage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedup, setIsSignedup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (formData) => {
    console.log('Login successful with', formData);
    setIsSignedup(true);
  };

  const handleSignup = (formData) => {
    console.log('Signup successful with', formData);
    setIsSignedup(true);
  };

  if (loading) {
    return <Splashscreen />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/Loginsign"
          element={<Loginsign handleLogin={handleLogin} handleSignup={handleSignup} />}  // Call component as JSX
        />
        <Route
          path="/"
          element={isSignedup ? <Homepage /> : <Navigate to="/Loginsign" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Navbar from './components/Navbar'; // Assuming Navbar file is in components folder
import Splashscreen from './components/Splashscreen';
import Loginsign from './components/Loginsign';
import Homepage from './components/Homepage';
import CheckoutForm from './components/CheckoutForm';
import Home from './pages/Home'; // Adjust paths as needed
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';
import Buy from './pages/Buy';

// Your Stripe publishable key
const stripePromise = loadStripe('your-publishable-key');

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedup, setIsSignedup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (formData) => {
    console.log('Login successful with', formData);
    setIsSignedup(true);
  };

  const handleSignup = (formData) => {
    console.log('Signup successful with', formData);
    setIsSignedup(true);
  };

  // Show splash screen if loading
  if (loading) {
    return <Splashscreen />;
  }

  return (
    <Router>
      {/* Show the Navbar on all pages except for the splash screen and login/signup 
      {!loading && isSignedup && <Navbar />}

      <Routes>
        {/* Login/signup route 
        <Route
          path="/Loginsign"
          element={<Loginsign handleLogin={handleLogin} handleSignup={handleSignup} />}
        />

        {/* Homepage route, protected by signup status 
        <Route
          path="/"
          element={isSignedup ? <Homepage /> : <Navigate to="/Loginsign" />}
        />

        {/* Additional routes 
        <Route path="/home" element={isSignedup ? <Home /> : <Navigate to="/Loginsign" />} />
        <Route path="/services" element={isSignedup ? <Services /> : <Navigate to="/Loginsign" />} />
        <Route path="/blog" element={isSignedup ? <Blog /> : <Navigate to="/Loginsign" />} />
        <Route path="/about" element={isSignedup ? <About /> : <Navigate to="/Loginsign" />} />
        <Route path="/buy" element={isSignedup ? <Buy /> : <Navigate to="/Loginsign" />} />

        {/* Checkout route with Stripe Elements 
        <Route
          path="/checkout"
          element={
            isSignedup ? (
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            ) : (
              <Navigate to="/Loginsign" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react'
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
 

function App() {

  const onToken = (token) => {
  console.log(token)
  }


  return (
    <div>
      <StripeCheckout
        token={onToken}
        name="Online-Payment"
        currency="INR"
        amount="200000"
        stripeKey="pk_test_51Q0JriCvi4rJRawoZ3dPFmW0XIWNNR56Ivb413QRtS6NU4OKP4sFQv82UWwfWhTDzDcY2oB0lID88Sp9aaeB4hI6003E5W0B7Q"
      />
    </div>
  )
}

export default App;*/
// App.js (Main Application File)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';  // Import Elements from Stripe
import { loadStripe } from '@stripe/stripe-js';  // Import loadStripe to load the Stripe instance
import Splashscreen from './components/Splashscreen';
import Loginsign from './components/Loginsign';
import Homepage from './components/Homepage';
import Payment from './components/Payment';
import About from './components/About';
import Location from './components/Location';
//import PaymentSuccess from './components/PaymentSuccessful';
// Load your Stripe public key
const stripePromise = loadStripe('pk_test_51Q0JriCvi4rJRawoZ3dPFmW0XIWNNR56Ivb413QRtS6NU4OKP4sFQv82UWwfWhTDzDcY2oB0lID88Sp9aaeB4hI6003E5W0B7Q');

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isSignedup, setIsSignedup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (formData) => {
    console.log('Login successful with', formData);
    setIsSignedup(true);
  };

  const handleSignup = (formData) => {
    console.log('Signup successful with', formData);
    setIsSignedup(true);
  };

  if (loading) {
    return <Splashscreen />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/Loginsign"
          element={<Loginsign handleLogin={handleLogin} handleSignup={handleSignup} />}
        />
        <Route
          path="/"
          element={isSignedup ? <Homepage /> : <Navigate to="/Loginsign" />}
        />
        <Route
          path="/about"
          element={<About />}
          />
          <Route
          path="/Location"
          element={<Location />}
          />
        
        {/* Wrap the payment route in <Elements> */}
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>  {/* Wrap the Payment component in Elements */}
              <Payment />
            </Elements>
          }
        />
         {/* Payment Success Route 
         <Route path="/payment-success" element={<PaymentSuccess />} />*/}
      </Routes>
    </Router>
  );
};
    

export default App;