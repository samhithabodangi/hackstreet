import React, { useEffect, useState } from 'react';
import Header from "../components/Header"
import '../cssFiles/Profile.css'
import '../App.css'
import {latestHomes} from "../data/property"

function sortByProperty(property) {
  return function(a, b) {
      if (a[property] < b[property]) {
          return -1;
      }
      if (a[property] > b[property]) {
          return 1;
      }
      return 0;
  };
}

function Survey() {

    const [price, setPrice] = useState(''); 
    const [walkscore, setWalkscore] = useState('');

const savePrice = (event) => {
    var price = document.getElementById("inputtedPrice").value;
    localStorage.setItem("desiredPrice", price);
    setPrice(event.target.value);
}

const saveWalkscore = (event) => {
    var walkscore = document.getElementById("inputtedWalkscore").value;
    localStorage.setItem("desiredWalkscore", walkscore);
    setWalkscore(event.target.value);
}

const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      setFavorites(latestHomes);
    }, []);
  
    useEffect(() => {
      console.log(favorites);
    }, [favorites]);
  
    function handleFavorite(id) {
      const newFavorites = favorites.map(item => {
        return item.id === id ? { ...item, favorite: !item.favorite } : item;
      });
  
      setFavorites(newFavorites);
    }

    return(
        <div>
    <Header/>
        <div>
        <div>

        <form>
        <h1>Please rate the following qualities of your desired house, on a scale from 1-10.</h1>

        <label for="price">Price:</label>
        <input type="number" id ="inputtedPrice" name="price" onChange={savePrice} min = "0" max = "10"></input>
        

        <label for="walkscore">Walkscore:</label>
        <input type="number" id ="inputtedWalkscore" name="walkscore" onChange={saveWalkscore} min = "0" max = "10"></input>


        </form>

        </div>

        <div>
            <p>Saved price: {price}</p>
            <p>Saved walkscore: {walkscore}</p>
        </div>
<div className="App">
      <h1>Initial list</h1>
      <ul>
        {favorites.map((item, i) => (
          <li key={i}>
            {item.address}{" "}
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.favorite === true ? "Remove" : "Add"}
              {item.score = (item.walkscore/100) * walkscore + (-1)*(item.price * price)}
            </button>
          </li>
        ))}
      </ul>
      <h1>Favorite list</h1>

      favorites.sort(sortByProperty('age'));

      <ul>
        {favorites.map(item =>
          item.favorite === true ? <li key={item.id}>{item.address}</li> : null
        )}
      </ul>
        </div>
        </div>
        </div>

    )
}

export default Survey