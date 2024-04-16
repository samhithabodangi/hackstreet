import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import '../cssFiles/FindHome.css';
import houseListings from '../data/houseListings.json';
import { Link } from 'react-router-dom';

const API_KEY = "Wxjc846YDgHe8OcA9A7J7dHj8EH9UnIb";

function FindHome() {
  const mapElement = useRef();
  const [map, setMap] = useState(null);
  const [zipCode, setZipCode] = useState('');
  const [latitude, setLatitude] = useState(42.361145);
  const [longitude, setLongitude] = useState(-71.057083);
  const [marker, setMarker] = useState(null);
  const [filteredListings, setFilteredListings] = useState([]);

  const updateMap = () => {

    if (marker) {
      marker.remove();
    }

    const url = `https://api.tomtom.com/search/2/structuredGeocode.json?key=${API_KEY}&countryCode=US&postalCode=${zipCode}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { lat, lon } = data.results[0].position;
        setLatitude(lat);
        setLongitude(lon);

        map.setCenter([lon, lat]);
        
        const filteredListings = houseListings.filter(listing => listing.Zipcode == zipCode);
        setFilteredListings(filteredListings);

        filteredListings.forEach(listing => {
          const { Latitude, Longitude} = listing;
          const marker = new tt.Marker().setLngLat([Longitude, Latitude]).addTo(map);
          setMarker(marker);
        });
 
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    let map = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: [longitude, latitude],
      zoom: 8
    });
    setMap(map);
  }, []); 

  return (
    <div className="homeBody">
      <Header />
      <h1 className="title">Find Home</h1>
      <div className="center">
        <p className="para">Please Enter your Desired ZipCode and Distances from Specific Places of Your Choosing</p>
      </div>
      <div className="mapBox">
        <div ref={mapElement} className="mapDiv" /> 
        <div className="location">
          <div className="inputBox">
            <input 
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="zip"
            />
            <button className="zipButton" onClick={updateMap}>Enter Zipcode</button>
          </div>
          <div className="houseAddresses">
          <ul>
            {filteredListings.map((listing, index) => (
             <li key={index} className = "houseIndiv"><Link to="/homeDetail/">
                {`Address: ${listing.Street}, ${listing.City}`}
                <hr className="line"></hr></Link>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FindHome;