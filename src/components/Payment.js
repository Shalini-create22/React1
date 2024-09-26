/*import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51Q0JriCvi4rJRawoZ3dPFmW0XIWNNR56Ivb413QRtS6NU4OKP4sFQv82UWwfWhTDzDcY2oB0lID88Sp9aaeB4hI6003E5W0B7Q");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create a payment intent on the backend
      const { data: clientSecret } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount: 1000, // Replace with the amount in cents (e.g., $10 = 1000 cents)
      });

      // Confirm card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        console.error(error.message);
        setPaymentStatus('Payment failed');
      } else if (paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment succeeded');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setPaymentStatus('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentStatus && <div>{paymentStatus}</div>}
    </form>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe with your publishable key
const stripePromise = loadStripe('your_stripe_publishable_key_here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create a payment intent on the backend
      const { data: clientSecret } = await axios.post('http://localhost:5000/create-payment-intent', {
        amount: 1000, // Replace with the amount in cents (e.g., $10 = 1000 cents)
      });

      // Confirm card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        console.error(error.message);
        setPaymentStatus('Payment failed');
      } else if (paymentIntent.status === 'succeeded') {
        setPaymentStatus('Payment succeeded');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setPaymentStatus('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentStatus && <div>{paymentStatus}</div>}
    </form>
  );
};

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;*/

// Payment.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51Q0JriCvi4rJRawoZ3dPFmW0XIWNNR56Ivb413QRtS6NU4OKP4sFQv82UWwfWhTDzDcY2oB0lID88Sp9aaeB4hI6003E5W0B7Q");

const Payment = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Complete Your Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
