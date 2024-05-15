import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import HeaderShift from "../components/HeaderShift";
import '../cssFiles/HomeDetail.css';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";

/**
 * The HomeDetail page displays information about each house that the user selects. 
 * Using the property id and location dat from the FindHome page, it calls the Rapid API
 * to get more information about each house. Additionally, the Rapid API displays information
 * about the closes schools and the school rating. The HomeDetail class uses the TomTom api to
 * show the user the closest hospital from the house and the distance from the hospital in 
 * case of emergencies. Using the Walk score API which is embeded in Rapid, the page
 * displays the walk score, the transit score, and the public transportation score
 * of the street. The user can add the home to the favorites in the profile page using 
 * local storage, which will pass the informatio to that page.
 */

function HomeDetail() {

  const { id } = useParams();
  const { zipCodes } = useParams();
  const { city } = useParams();
  const { state  } = useParams();

  const [photos, setPhotos] = useState([]);
  const [details, setDetails] = useState([]);
  const [nearestHospital, setNearestHospital] = useState(null); 
  const [walkScore, setWalkScore] = useState([]);

  useEffect(() => {
    getPhotos();
    handleSearch();
    searchNearestHospital(latitude, longitude);
    getWalkScore();
  }, [id, details]);

  const getPhotos = async () => {

    const options = {
    method: 'GET',
    url: 'https://realty-in-us.p.rapidapi.com/properties/v3/get-photos',
    params: {
        property_id: `${id}`
    },
    headers: {
        'X-RapidAPI-Key': '92303c2ffcmsh96819e43b94a94ep155311jsna0d4d19f4f2a',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        setPhotos(response.data.data.home_search.results[0].photos || []);
      } catch (error) {
        console.error(error);
      }
  };

 const [longitude, setLongitude] = useState('')
 const [latitude, setLatitude] = useState('')

 const [price, setPrice] = useState();
 const [bed, setBed] = useState();
 const [bath, setBath] = useState();
 const [area, setArea] = useState();
 const [addressLine, setAddressLine] = useState();
 const [photoHref, setPhotoHref] = useState();

  const handleSearch = async () => {

    const options = {
      method: 'GET',
      url: 'https://realty-in-us.p.rapidapi.com/properties/v3/detail',
      params: {
        property_id: id
      },
      headers: {
        'X-RapidAPI-Key': '92303c2ffcmsh96819e43b94a94ep155311jsna0d4d19f4f2a',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
      }
    };
  
    try {
        const response = await axios.request(options);
        console.log(response.data);
        
        setLatitude(response.data.data.home.location.address.coordinate.lat)
        setLongitude(response.data.data.home.location.address.coordinate.lon)

        setDetails([response.data.data.home]);

        setPrice(response.data.data.home.list_price)
        setBed(response.data.data.home.description.beds)
        setBath(response.data.data.home.description.baths)
        setArea(response.data.data.home.description.sqft)
        setAddressLine(response.data.data.home.location.address.line)
        setPhotoHref(response.data.data.home.photos[0].href)

      } catch (error) {
        console.error(error);
      }
  
  };

  const apiKey = 'AkUtgnA9vXFLN4HTUl6jbhDu6ppbu3mJ'; 

const searchNearestHospital = async (latitude, longitude) => {
    const url = `https://api.tomtom.com/search/2/categorySearch/hospital.json?key=${apiKey}&lat=${latitude}&lon=${longitude}&limit=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const hospitals = data.results;

        if (hospitals && hospitals.length > 0) { 
            const nearestHospital = hospitals[0];
            console.log('Nearest Hospital:', nearestHospital.poi.name);
            console.log('Distance:', nearestHospital.dist, 'meters');
            setNearestHospital(nearestHospital); 
        } else {
            console.log('No hospitals found near the specified coordinates.');
        }
    } catch (error) {
        console.error('Error searching for hospitals:', error);
    }
};

const [houseWalkScore, setHouseWalkScore] = useState();

const getWalkScore = async () => {
    const wsApiKey = '65b0c173fbe59ac0e779efa513c371a6'; 
    const address = encodeURIComponent(`${city}, ${state} ${zipCodes}`);

    const url = `https://walk-score.p.rapidapi.com/score?lat=${latitude}&wsapikey=${wsApiKey}&lon=${longitude}&format=json&bike=1&transit=1`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '92303c2ffcmsh96819e43b94a94ep155311jsna0d4d19f4f2a', 
        'X-RapidAPI-Host': 'walk-score.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      setWalkScore(result);
      setHouseWalkScore(result.walkscore)
    } catch (error) {
      console.error('Error fetching Walk Score:', error);
    }
  };

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true
  };

  
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteHouses')) || [];
    const isFavorited = favorites.some(house => house.id === id);
    setIsFavorite(isFavorited);
  }, [id]); 
    
  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteHouses')) || [];
    const houseDetails = { id, zipCodes, city, state, price, bed, bath, area, addressLine, photoHref, houseWalkScore };
    console.log("House Details:", houseDetails); 
    localStorage.setItem('favoriteHouses', JSON.stringify([...favorites, houseDetails]));
    setIsFavorite(true);
  };
  
  const removeFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteHouses')) || [];
    const updatedFavorites = favorites.filter(house => house.id !== id);
    localStorage.setItem('favoriteHouses', JSON.stringify(updatedFavorites));
    setIsFavorite(false);
  }; 

    return(
        <div className="homeDetailBody">
            <HeaderShift />
            
            <div className="tabs">
                <Link className="backButton" to={`/findHome/${zipCodes}/${city}/${state}`}>
                    <FontAwesomeIcon icon={faAngleLeft} className="backArrow"/>
                    <h4>Back </h4>
                </Link>
                <h4>House Details</h4>
                <h4>Monthly Payment Calculator</h4>
                <h4>Surroundings</h4>
                <h4>School</h4>
                <h4>History</h4>
                <h4>Contact</h4>
            </div>

            <div className="photoBox">
            <div className="photoGallery">
                <Slider {...settings}>
                    {photos.map((photo, index) => {
                        let highRes = `${photo.href}`;
                        let add = "-w2048_h1536";
                        let indexPosition = highRes.length - 4;
                        let newHref = highRes.slice(0, indexPosition) + add + highRes.slice(indexPosition);

                        return (
                            <div key={index} className="slideMargin"> 
                                <img src={newHref} alt={`Photo ${index}`} className="houseCarousel" />
                            </div>
                        );
                    })}
                </Slider>
            </div>
            </div>

            <div className="details">
                {details.map((detail, index) => {
                    return(
                        <div key={index}>
                        <div className="detailsMain">
                            <div>
                                <h1 className="detailPrice">${price}</h1>
                                <h2 className="detailAddress">{detail.location.address.line}, {city}, {state} {zipCodes}</h2>
                            </div>
                            
                            <div>
                                <h1>{detail.description.beds}</h1>
                                <h2>Beds</h2>
                            </div>

                            <div>
                                <h1>{detail.description.baths}</h1>
                                <h2>Baths</h2>
                            </div>

                            <div>
                                <h1>{detail.description.sqft}</h1>
                                <h2>sq ft</h2>
                            </div>

                            <div className="mortgage">
                                <h1>${detail.mortgage.estimate.monthly_payment}</h1>
                                <h2>Estimated Monthly Payment</h2>
                            </div>
                        </div>
                        <div className="hometext">
                          <p>{detail.description.text}</p>
                        </div>
                        <div className="schoolList">
                        <h1 className="schoolsTitle">Schools</h1>
                        <div className="schoolContainer">
                            {detail.nearby_schools.schools.slice(0, 4).map((school, index) => (
                            <div key={index} className="schoolItem">
                                <h3>{school.name}</h3>
                                <p>Distance: {school.distance_in_miles} miles</p>
                                <p>Grades: {school.grades.join(', ')}</p>
                                <p>Rating: {school.rating}</p>
                            </div>
                            ))}
                        </div>
                        </div>
                        </div>
                    );
                })}
            </div>
            <div className="newDetails">
            {nearestHospital && (
            <div className="hospital">
                <h1>Nearest Hospital</h1>
                <p>Name: {nearestHospital.poi.name}</p>
                <p>Distance: {(nearestHospital.dist / 1000).toFixed(2)} km</p>
            </div>
        )}
        <div>
            <h1>Walk Score: </h1>
            <p className="score">{walkScore.walkscore}</p>
            </div>
            <div>
            {walkScore.bike && (
                <><h1>Bike Score: </h1>
                <p className="score"> {walkScore.bike.score}</p></>
            )}
            </div>
            <div>
            {walkScore.transit && (
                <><h1>Transit Score: </h1>
                <p className="score"> {walkScore.transit.score}</p></>
            )}
        </div>
        </div>
        <div className="love">
          <h2 className="loveText">Love The House? Favorite and View it in the Profile Tab!</h2>
          {isFavorite ? (
            <button onClick={removeFromFavorites} className="loveButton">Remove Favorite</button>
          ) : (
            <button onClick={addToFavorites} className="loveButton">Favorite</button>
          )}
          <Link to="/resources" className="loveButton resourceBut">Resources</Link>
        </div>
            <Footer />
        </div>
    )
}

export default HomeDetail; 