import React, { useState, useEffect } from "react";
import HeaderShift from "../components/HeaderShift";
import "../cssFiles/Profile.css";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Profile() {
  const [favoriteHouses, setFavoriteHouses] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteHouses")) || [];
    setFavoriteHouses(favorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteHouses.filter((house) => house.id !== id);
    setFavoriteHouses(updatedFavorites);
    localStorage.setItem("favoriteHouses", JSON.stringify(updatedFavorites));
  };

  const sortHousesByPrice = () => {
    const sortedHouses = [...favoriteHouses].sort((a, b) => a.price - b.price);
    setFavoriteHouses(sortedHouses);
  };

  return (
    <div className="App">
      <HeaderShift />
      <h1>Favorites</h1>
    <button onClick={sortHousesByPrice}>Sort by Price</button>
      {favoriteHouses.map((house) => {
  return (
    <div key={house.id}>
      <p>House ID: {house.id}</p>
      <p>ZipCode: {house.zipCodes}</p>
      <p>Price: {house.price}</p>
      <button onClick={() => removeFromFavorites(house.id)}>
        Remove from Favorites
      </button>
    </div>
  );
})}
    </div>
  );
}


export default Profile;
