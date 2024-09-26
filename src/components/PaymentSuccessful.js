import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your payment was processed successfully.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>Go to Homepage</button>
      </Link>
    </div>
  )
}

export default PaymentSuccess;
