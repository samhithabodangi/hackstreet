import React, { useState, useEffect } from 'react';
import HeaderShift from '../components/HeaderShift';
import { Link } from 'react-router-dom';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import '../cssFiles/ZipCode.css';
import houseBanner from "../assets/houseBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import forSale from "../assets/forSale.png";
import neighborhood from "../assets/neighborhood.png";
import apartment from "../assets/apartment.png";
import Footer from '../components/Footer';
import ZipCodeCarousel from './ZipCodeCarousel';

const API_KEY = "AkUtgnA9vXFLN4HTUl6jbhDu6ppbu3mJ";

/*
The ZipCode class takes user input zipcode and navigates to the FindHome page, passing the 
zipcode, state, and city that were found from the users input using the TomTom API.
*/

const ZipCode = () => {
    const [zipCodes, setZipCodes] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
  
    useEffect(() => {

        const url = `https://api.tomtom.com/search/2/structuredGeocode.json?key=${API_KEY}&countryCode=US&postalCode=${zipCodes}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const city = data.results[0].address.municipality;
                const state = data.results[0].address.countrySubdivision;
                
                setCity(city);
                setState(state);
            })
            .catch(error => {
                console.log(error);
            });

            
    }, [zipCodes]);


    const handleChange = (event) => {
        setZipCodes(event.target.value);
    };


    return(
        <div className="wholeZip">
        <div className="zipCodeBody">
        <HeaderShift />
        <div className="zipCodeText" style={{ backgroundImage: `url(${houseBanner})`}}>
            <div>
                <div className="bannerText">
                    <h1 className="banner">Find Your Dream Home</h1>
                    <p className="banner">Please Enter your Desired ZipCode</p>
                </div>

                <div className="bannerInput">
                    <input
                        inputMode="number"
                        className="zip"
                        placeholder='Enter ZipCode'
                        value={zipCodes}
                        onChange={handleChange} />   
                    <Link to={`/findHome/${zipCodes}/${city}/${state}`} className="zipButtons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>

                </div>
            </div>
        </div>

        <div className="forSale">
            <img src={forSale}/>
            <div className="forSaleText">
                <h1>Discover New Homes</h1>
                <p className="discoverText">Find the perfect home with your desired features. Filter homes with your input to find your dream home.</p>
                <div >
                    <input
                        inputMode="number"
                        className="zip"
                        placeholder='Enter ZipCode'
                        value={zipCodes}
                        onChange={handleChange} />   
                    <Link to={`/findHome/${zipCodes}/${city}/${state}`} className="zipButtons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>

                </div>
            </div>
        </div>

        <div className="forSale discoverBottom">
            <div className="forSaleTextL">
                <h1>Assess The Community</h1>
                <p className="discoverText2">Understand the community and neighborhood by pressing each house to learn more before closing a deal.</p>
                <Link to="/resources" className="discoverButton">Learn More</Link>
            </div>
            <img src={neighborhood} style={{width: '612px'}}/>
        </div>

        <div className="forSale discoverBottom">
            <img src={apartment} style={{width: '612px'}}/>
            <div className="forSaleText">
                <h1>Make Confident Decisions</h1>
                <p className="discoverText">Save the houses by favoriting them and comparing them with our decision matrix in the Profile page</p>
                <div >
                    <input
                        inputMode="number"
                        className="zip"
                        placeholder='Enter ZipCode'
                        value={zipCodes}
                        onChange={handleChange} />   
                    <Link to={`/findHome/${zipCodes}/${city}/${state}`} className="zipButtons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>

                </div>
            </div>
        </div>

        <div className="newHome">
            <h1 className="lateHome">Latest Real Estate Properties in New York:</h1>
            <ZipCodeCarousel />
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default ZipCode