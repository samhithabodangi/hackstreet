import React, {useState, useEffect} from "react"
import Header from "../components/Header"
import '../cssFiles/Profile.css'
import '../App.css'
import Survey from "../pages/Survey"
import {latestHomes} from "../data/property";

function Profile() {

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

    var score;
    
  }


return(
    <div className="App">
        <Header />
        <Survey />
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
            </button>
          </li>
        ))}
      </ul>

      <h1>Favorite list</h1>
      <ul>
        {favorites.map(item =>
          item.favorite === true ? <li key={item.id}>{item.address}, {item.price}</li> : null
        )}
      </ul>
    </div>
    )
}

export default Profile