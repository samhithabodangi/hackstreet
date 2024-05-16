import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import '../cssFiles/FindHome.css';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const API_KEY = "AkUtgnA9vXFLN4HTUl6jbhDu6ppbu3mJ";

/*
The FindHome page takes the location information from the ZipCode page to display all the house listings 
in that area using the Real Estate Rapid API. A map is displayed using the TomTom API that uses the 
coordinates of the homes and marks them on the map. The markers can be pressed on to see the address 
line of the home. The user can filter the houses based on the number of beds, baths, and price.
The user can press on each house to navigate to the HomeDetail page of each house which gives them
more information about the house.
*/

function FindHome() {

  //data from prev page
  const { zipCodes } = useParams();
  const { city } = useParams();
  const { state  } = useParams();

  //dropdowns
  const [forSale, setForSale] = useState(false)
  const [price, setPrice] = useState(false)
  const [bedBath, setBedBath] = useState(false)
  const [homeType, setHomeType] = useState(false)
  const [hosDis, setHosDis] = useState(false)
  const [transport, setTransport] = useState(false)

  //dropdown text
  const [selectedSaleOption, setSelectedSaleOption] = useState('For Sale');
  const [priceButtonText, setPriceButtonText] = useState('Price');
  const [bedBathText, setBedBathText] = useState('Beds + Baths');
  const [selectedHomeOption, setSelectedHomeOption] = useState('Home Type');
  const [hospitalText, setHospitalText] = useState('Hospital Distance');
  const [transportText, setTransportText] = useState('Public Transportation is Important')

  //variables
  const [minimum, setMinimum] = useState('');
  const [maximum, setMaximum] = useState('');
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  const [hospitalDistance, setHospitalDistance]= useState("");
  const [filteredHouses, setFilteredHouses] = useState([]);

  const mapElement = useRef();
  const [map, setMap] = useState(null);

  const changeMax = (event) => {
    let value = event.target.value;
    if (!value.startsWith('$')) {
      value = '$' + value;
    }
    setMaximum(value);
  };

  const changeMin = (event) => {
    let value = event.target.value;
    if (!value.startsWith('$')) {
      value = '$' + value;
    }
    setMinimum(value);
  };

  const changeHosDist = (event) => {
    let value = event.target.value;
    setHospitalDistance(value);
  };

  const priceRange = () => {
    setPriceButtonText(`${minimum} - ${maximum}`);

    if (minimum == '$' || maximum == '$') {
      setPriceButtonText(`Price`);
    }

    else if (minimum && maximum) {
      setPriceButtonText(`${minimum} to ${maximum}` );
    } 
    
    else if (minimum) {
      setPriceButtonText(`${minimum}+`);
    } 
    
    else if (maximum) {
      setPriceButtonText(`Up To ${maximum}`);
    } 
  };

  const hospitalFilter = () => {
    if (hospitalDistance == '') {
      setHospitalText(`Hospital Distance`)
    }
    if (hospitalDistance) {
      setHospitalText(`Up to ${hospitalDistance} miles from Hospital`)
    }
  }

  const bedButton = (buttonId) => {
    setBeds(buttonId);
  };
  
  const bathButton = (buttonId) => {
    setBaths(buttonId);
  };

  const bedBathEnter = () => {
    if (beds && baths) {
      setBedBathText( `${beds}+ Bed, ${baths}+ Bath`);
    }
    else if(beds) {
      setBedBathText(`${beds}+ Beds`)
    }
    else if(baths) {
      setBedBathText(`${baths}+ Baths`)
    }
  };

  const closeAllDropdowns = () => {
    setForSale(false);
    setBedBath(false);
    setPrice(false);
    setHomeType(false);
    setHosDis(false);
    setTransport(false);
  };

  const [houses, setHouses] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const url = `https://api.tomtom.com/search/2/structuredGeocode.json?key=${API_KEY}&countryCode=US&postalCode=${zipCodes}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { lat, lon } = data.results[0].position;
  
        let map = tt.map({
          key: API_KEY,
          container: mapElement.current,
          center: [lon, lat],
          zoom: 11.5
        });
        setMap(map);
      });
  }, []);

  useEffect(() => {
    if (map) {
      markers.forEach(marker => marker.remove());
      houses.forEach(house => {
        const coordinate = house.location.address.coordinate;
        const address = house.location.address.line;
        if (coordinate && coordinate.lon && coordinate.lat) {
          const marker = new tt.Marker()
          .setLngLat([coordinate.lon, coordinate.lat])
          .addTo(map)
          .setPopup(new tt.Popup().setHTML(address));
          markers.push(marker);
        } else {
          console.error('Missing coordinates for house:', house);
        }
      });
    }
  }, [houses, map]);

  useEffect(() => {
    handleSearch();
  }, [selectedSaleOption, beds, baths, minimum, maximum, selectedHomeOption, hospitalDistance]);

  useEffect(() => {
    filterHousesByDistance();
  }, [houses, hospitalDistance]);

  const handleSearch = async () => {
    const requestData = {
        limit: 30,
        offset: 0,
        postal_code: zipCodes,
        sort: {
            direction: 'desc',
            field: 'list_date'
        }
    };

    if (selectedSaleOption === 'For Sale') {
        requestData.status = ['for_sale', 'ready_to_build'];
    } else {
        requestData.status = ['for_rent'];
    }

    if (beds) {
      requestData.beds = { min: parseInt(beds) };
  }

  if (baths) {
      requestData.baths = { min: parseFloat(baths) };
  }

    if (minimum || maximum) {
        requestData.list_price = {};
        if (minimum) {
            requestData.list_price.min = parseInt(minimum.replace('$', ''), 10);
        }
        if (maximum) {
            requestData.list_price.max = parseInt(maximum.replace('$', ''), 10);
        }
    }

    if (selectedHomeOption) {
      const typeMap = {
          'Apartment': 'apartment',
          'Condo': 'condos',
          'Townhouse': 'condo_townhome',
          'House': 'single_family',
          'Multi-Family': 'multi_family'
      };
      const homeType = typeMap[selectedHomeOption];
      if (homeType) {
          requestData.type = [homeType];
      }
  }

    const options = {
        method: 'POST',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'da6093162dmsh4d39d1749523e76p1dc078jsn9bd99f1920ae',
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        },
        data: requestData
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        setHouses(response.data.data.home_search.results || []);
    } catch (error) {
        console.error(error);
    }

    if (hospitalDistance) {
      hospitalFilter();
    }
};

const searchNearestHospital = async (latitude, longitude) => {
  const url = `https://api.tomtom.com/search/2/categorySearch/hospital.json?key=${API_KEY}&lat=${latitude}&lon=${longitude}&limit=1`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      const hospitals = data.results;

      if (hospitals && hospitals.length > 0) { 
          const nearestHospital = hospitals[0];
          console.log('Nearest Hospital:', nearestHospital.poi.name);
          console.log('Distance:', nearestHospital.dist, 'meters');
          return nearestHospital;
      } else {
          console.log('No hospitals found near the specified coordinates.');
          return null;
      }
  } catch (error) {
      console.error('Error searching for hospitals:', error);
      return null;
  }
};

const filterHousesByDistance = async () => {
  if (hospitalDistance) {
    const nearestHospital = await searchNearestHospital(latitude, longitude);
    if (!nearestHospital) return;
    
    const maxDistance = parseInt(hospitalDistance);
    const filteredHouses = houses.filter((house) => {
      const distanceToHospital = calculateDistance(house.latitude, house.longitude, nearestHospital.position.lat, nearestHospital.position.lon);
      return distanceToHospital <= maxDistance * 1609.34; 
    });

    setFilteredHouses(filteredHouses);
  }
};

  return (
    <div className="homeBody">
      <Header />
      <div className="mapTextDiv">
        <div ref={mapElement} className="mapContainer" /> 

        <div className="findText">
          <p className="cityState"><b>Real Estate Properties Near {city}, {state}</b></p>

          <div className="optionNorm">
          
          <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => { closeAllDropdowns(); setForSale(!forSale); }}> {selectedSaleOption}
            <FontAwesomeIcon icon={faCaretDown} /></div>
            {forSale && (
              <div className="dropdown-content sale" style={{ zIndex: 1 }}>
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="For Sale" checked={selectedSaleOption === 'For Sale'} onChange={(e) => setSelectedSaleOption(e.target.value)}/> For Sale
                  </label>
                </div>
                
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="For Rent" checked={selectedSaleOption === 'For Rent'} onChange={(e) => setSelectedSaleOption(e.target.value)}/> For Rent
                  </label>
                </div>
            </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn bedsYBath" onClick={(e) => { closeAllDropdowns(); setBedBath(!bedBath); }}  > {bedBathText}
            <FontAwesomeIcon icon={faCaretDown} /></div>
            
            {bedBath && (
              <div className="dropdown-content bedsContent" style={{ zIndex: 1 }}>

                <div className="bedButtons priceTextInput max">
                  <div className="dropdown-item priceID bed">Beds: </div>
                  <button className={`numButton ${beds === '1' ? 'active' : undefined}`} onClick={() => bedButton('1')}> 1+ </button>
                  <button className={`numButton ${beds === '2' ? 'active' : undefined}`} onClick={() => bedButton('2')}> 2+ </button>
                  <button className={`numButton ${beds === '3' ? 'active' : undefined}`} onClick={() => bedButton('3')}> 3+ </button>
                  <button className={`numButton ${beds === '4' ? 'active' : undefined}`} onClick={() => bedButton('4')}> 4+ </button>
                  <button className={`numButton ${beds === '5' ? 'active' : undefined}`} onClick={() => bedButton('5')}> 5+ </button>
                </div>
              
              <div className="bedButtons priceTextInput max">
                  <div className="dropdown-item priceID">Baths: </div>
                  <button className={`numButton ${baths === '1' ? 'active' : undefined}`} onClick={() => bathButton('1')}> 1+ </button>
                  <button className={`numButton ${baths === '1.5' ? 'active' : undefined}`} onClick={() => bathButton('1.5')}> 1.5+ </button>
                  <button className={`numButton ${baths === '2' ? 'active' : undefined}`} onClick={() => bathButton('2')}> 2+ </button>
                  <button className={`numButton ${baths === '3' ? 'active' : undefined}`} onClick={() => bathButton('3')}> 3+ </button>
                  <button className={`numButton ${baths === '4' ? 'active' : undefined}`} onClick={() => bathButton('4')}> 4+ </button>
                </div>

                
              <button className="bedBathEnter" onClick={bedBathEnter}>Enter</button>
            </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn priceButt" onClick={(e) => { closeAllDropdowns();  setPrice(!price); }} > {priceButtonText}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            
            {price && (
              <div className="dropdown-content priceContent" style={{ zIndex: 1 }}>
              <div className="priceTextInput max">
                <div className="dropdown-item priceID">Minimum: </div>
                <input 
                  inputMode="number"
                  name="Minimum"
                  value={minimum}
                  onChange={changeMin}
                  className="min"
                  placeholder='Enter Minimum Price'
                />
              </div>
              
              <div className="priceTextInput max">
                <div className="dropdown-item priceID">Maximum: </div>
                <input 
                    inputMode="number"
                    name="Maximum"
                    value={maximum}
                    onChange={changeMax}
                    className="min"
                    placeholder='Enter Maximum Price'
                  />
                </div>
                
                <button className="priceEnter" onClick={priceRange}>Enter</button>
            </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => { closeAllDropdowns();  setHomeType(!homeType); }} >{selectedHomeOption}
            <FontAwesomeIcon icon={faCaretDown} /></div>
            {homeType && (
              <div className="dropdown-content sale" style={{ zIndex: 1 }}>
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="House" checked={selectedHomeOption === 'House'} onChange={(e) => setSelectedHomeOption(e.target.value)}/> House
                  </label>
                </div>
                
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Townhouse" checked={selectedHomeOption === 'Townhouse'} onChange={(e) => setSelectedHomeOption(e.target.value)}/> Townhouse
                  </label>
                </div>

                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Condo" checked={selectedHomeOption === 'Condo'} onChange={(e) => setSelectedHomeOption(e.target.value)}/> Condo
                  </label>
                </div>

                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Multi-Family" checked={selectedHomeOption === 'Multi-Family'} onChange={(e) => setSelectedHomeOption(e.target.value)}/> Multi-Family
                  </label>
                </div>

                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Apartment" checked={selectedHomeOption === 'Apartment'} onChange={(e) => setSelectedHomeOption(e.target.value)}/> Apartment
                  </label>
                </div>

            </div>
            )}
          </div>
          
          </div>

          <div className="optionNew">
          
          <div className="dropdown">
            <div className="dropdown-btn hosButt" onClick={(e) => { closeAllDropdowns();  setHosDis(!hosDis); }} > {hospitalText}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            
            {hosDis && (
              <div className="dropdown-content" style={{ zIndex: 1 }}>
              <div className="priceTextInput max">
                <div className="dropdown-item priceID">Distance: </div>
                <input 
                  inputMode="number"
                  name="hospitalDistance"
                  value={hospitalDistance}
                  onChange={changeHosDist}
                  className="min"
                  placeholder='Enter Maximum Distance'
                />
              </div>
                
                <button className="priceEnter" onClick={hospitalFilter}>Enter</button>
            </div>
            )}
          </div>

          <div className="dropdown">
            <div className="dropdown-btn transport" onClick={(e) => { closeAllDropdowns();  setTransport(!transport); }} > {transportText}
            <FontAwesomeIcon icon={faCaretDown} /></div>
            {transport && (
              <div className="dropdown-content transportContent" style={{ zIndex: 1 }}>
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Public Transportation is Important" checked={transportText === 'Important'} onChange={(e) => setTransportText(e.target.value)}/> Important
                  </label>
                </div>    
                <div className="dropdown-item saleItem">
                  <label>
                    <input type="radio" value="Public Transportation is Not Important" checked={transportText === 'Not Important'} onChange={(e) => setTransportText(e.target.value)}/> Not Important
                  </label>
                </div>
            </div>
            )}
          </div>
          </div>

        <div className="housesContainer">
          {houses.map((house, index) => {
            let highRes = `${house.primary_photo.href}`;
            let add = "-w2048_h1536";
            let indexPosition = highRes.length - 4;
            let newHref = highRes.slice(0, indexPosition) + add + highRes.slice(indexPosition);

            let id = `${house.property_id}`

            return (
              <div key={index} className="houseItem">
                <div className="wholeHome" >
                  <Link to={`/homeDetail/${id}/${zipCodes}/${city}/${state}`} >
                    <img src={newHref} alt="Primary Photo" className="houseImg" />
                  </Link>
                  <div className='houseDetails'>
                    <div className="housePrice">
                      ${house.list_price} 
                      <div className="favoriteIcon heart">
                      </div>
                    </div>
                    <div className="bedBathDetail">
                      <h4 className="bold marginR marginL">{house.description.beds} Beds</h4>
                      <h4 className="bold marginR marginL">| {house.description.baths} Baths</h4>
                      <h4 className="bold">| {house.description.sqft} sq.ft.</h4>
                    </div>
                    <div className="houseAddress">{house.location.address.line}, {house.location.address.city}, {house.location.address.state_code} {house.location.address.postal_code}</div>
                    <div className="houseID">MLS ID {id}, Type: {house.description.type}</div>
                  </div>
                </div>
              </div>
            );
          })}
</div>


        </div>
      </div>
    </div>
  );
}

export default FindHome;