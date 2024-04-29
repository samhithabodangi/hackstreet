import React from 'react';
import {useState} from 'react';


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

    return(
        
        <div>
        <div>

        <form>
        <h1>Please rate the following qualities of your desired house, on a scale from 1-10.</h1>

        <label for="price">Price:</label>
        <input type="number" id ="inputtedPrice" name="price" onChange={savePrice} min = "0" max = "10"></input>
        

        <label for="walkscore">Walkscore:</label>
        <input type="number" id ="inputtedWalkscore" name="walkscore" onChange={saveWalkscore} min = "0" max = "7"></input>


        </form>

        </div>

        <div>
            <p>Saved price: {price}</p>
            <p>Saved walkscore: {walkscore}</p>
        </div>
        </div>

    )
}

export default Survey