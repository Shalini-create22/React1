import React, { useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null
  });

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: 'Unable to retrieve your location'
          });
        }
      );
    } else {
      setLocation({
        error: 'Geolocation is not supported by your browser'
      });
    }
  };

  return (
    /*<div>
      <button onClick={fetchLocation}>Get Location</button>
      {location.latitude && location.longitude ? (
        <div>
          <h3>Your Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>{location.error}</p>
      )}
    </div>*/
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  }}
>
  <button
    onClick={fetchLocation}
    style={{
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
  >
    Get Location
  </button>
  {location.latitude && location.longitude ? (
    <div>
      <h3
        style={{
          margin: '20px 0 10px',
          fontSize: '24px',
          color: '#060270',
        }}
      >
        Your Location:
      </h3>
      <p style={{ fontSize: '18px', color: '#000000'
       }}>
        Latitude: {location.latitude}
      </p>
      <p style={{ fontSize: '18px', color: '#000000' }}>
        Longitude: {location.longitude}
      </p>
    </div>
  ) : (
    <p style={{ fontSize: '18px', color: 'red' }}>{location.error}</p>
  )}
</div>

  );
};

export default Location;
