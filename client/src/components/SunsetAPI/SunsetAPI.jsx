import React, { useEffect, useState } from 'react';
import "./Sunset.css";
import { getData } from "../../services/Api.Services";


export default function YourComponent() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
              console.log("Latitude is:", position.coords.latitude);
              setLatitude(position.coords.latitude);
              console.log("Longitude is:", position.coords.longitude);
              setLongitude(position.coords.longitude);
              const getDataAndSetState = async () => {
                const { sunrise, sunset } = await getData(position.coords.latitude, position.coords.longitude);
                console.log('Sunrise:', sunrise);
                console.log('Sunset:', sunset);
                setSunrise(sunrise);
                setSunset(sunset);
              };
              getDataAndSetState();
            }, (error) => {
              console.error("Error getting geolocation:", error);
            });
          
        };
      
        fetchUserData();
      }, []);
      
  return (
    <div>
      <div className="modal">
        <div className="modal-card">
          <div className="modal-contain">
            <div className="latitude">Latitude: {latitude}</div>
            <div className="longitude">Longitude: {longitude}</div>
            <div className="sunrise">sunrise: {sunrise}</div>
            <div className="sunset">sunset: {sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
