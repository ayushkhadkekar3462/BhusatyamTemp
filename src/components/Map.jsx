// src/Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 44.387611,
  lng: -68.204336, // Center of the map (you can change these coordinates)
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBfXgk84WoQQHPWNa95yAVE7T0u_lgzTmA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers or other map features here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
