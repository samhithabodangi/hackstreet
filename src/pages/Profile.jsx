import React, { useState, useEffect } from "react";
import HeaderShift from "../components/HeaderShift";
import "../cssFiles/Profile.css";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

/**
 * The profile page 
 */

function Profile() {
  const [favoriteHouses, setFavoriteHouses] = useState([]);
  const [priceWeight, setPriceWeight] = useState(5); 
  const [walkScoreWeight, setWalkScoreWeight] = useState(5);
  const [bestHouse, setBestHouse] = useState(null);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteHouses")) || [];
    setFavoriteHouses(favorites);
    sortHousesByPrice();
  }, []);
//Allows for user to remove a house from the favorites on the profile page.
  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteHouses.filter((house) => house.id !== id);
    setFavoriteHouses(updatedFavorites);
    localStorage.setItem("favoriteHouses", JSON.stringify(updatedFavorites));
  };

  const handlePriceWeightChange = (event) => {
    const value = parseInt(event.target.value);
    setPriceWeight(Math.min(Math.max(value, 1), 10));
  };

  const handleWalkScoreWeightChange = (event) => {
    const value = parseInt(event.target.value);
    setWalkScoreWeight(Math.min(Math.max(value, 1), 10)); 
  };

  const sortHouses = () => {
    const sortedHouses = [...favoriteHouses].sort((a, b) => {
      const weightedSumA = (a.price / 100000) * priceWeight - (a.houseWalkScore / 100) * walkScoreWeight;
      const weightedSumB = (b.price / 100000) * priceWeight - (b.houseWalkScore / 100) * walkScoreWeight;
      return weightedSumA - weightedSumB; 
    });
  
    setFavoriteHouses(sortedHouses);

    if (sortedHouses.length > 0) {
      setBestHouse(sortedHouses[0]); 
    }
  };
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className="App">
      <HeaderShift />
        <h1 className="favTitle">Favorite Homes Ordered Based On Your Preferences</h1>
    <div className="favCenter">
    <div className="favFlex">
        {favoriteHouses.map((house) => (
          <div key={house.id} className="houseCard">
          <div className="wholeHouse">
            <img src={house.photoHref} alt="" className="houseImg" />
            <div className="houseDetails">
            <div className="housePrice"> ${house.price}
            <FontAwesomeIcon className= "redHeart" icon={faHeartSolid} onClick={() => removeFromFavorites(house.id)}/>
                  </div>
              <div className="bedBathDetail">
                <h4 className="bold marginR marginL">{house.bed} Beds </h4>
                <h4 className="bold marginR marginL">| {house.bath} Baths </h4>
                <h4 className="bold">| {house.area} sq. ft</h4>
              </div>
              <div className="houseAddress">{house.addressLine}, {house.city}, {house.state} {house.zipCodes}</div>
                  <div className="houseID">MLS ID {house.id}, WalkScore: {house.houseWalkScore}</div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
    <div className="weightInputs">
    <div>
        <input
          type="number"
          id="priceWeight"
          value={priceWeight}
          onChange={handlePriceWeightChange}
          min="1"
          max="10"
          className="weightage"
        />
        <label htmlFor="priceWeight" className="inputLabel">Price Weight:</label>
        <input
          type="number"
          id="walkScoreWeight"
          value={walkScoreWeight}
          onChange={handleWalkScoreWeightChange}
          min="1"
          max="10"
          className="weightage"
        />
        <label htmlFor="walkScoreWeight" className="inputLabel">Walk Score Weight:</label>
        </div>
        <button  className="loveButton2" onClick={sortHouses}>Sort Favorite Houses</button>
      </div>

      {bestHouse && (
        <div className="bestHouse">
          <h2>Best House</h2>
          <div className="wholeHouse">
            <img src={bestHouse.photoHref} alt="" className="houseImg" />
            <div className="houseDetails">
              <div className="housePrice">
                ${bestHouse.price}
                <FontAwesomeIcon className= "redHeart" icon={faHeartSolid} onClick={() => removeFromFavorites(bestHouse.id)} />
              </div>
              <div className="bedBathDetail">
                <h4 className="bold marginR marginL">{bestHouse.bed} Beds </h4>
                <h4 className="bold marginR marginL">| {bestHouse.bath} Baths </h4>
                <h4 className="bold">| {bestHouse.area} sq. ft</h4>
              </div>
              <div className="homeAddress">{bestHouse.addressLine}</div>
              <div className="houseID">MLS ID {bestHouse.id}</div>
            </div>
          </div>
        </div>
      )}

<Footer />
    </div>
  )
}

export default Profile;
