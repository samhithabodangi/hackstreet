import React, { useState } from 'react';
import axios from 'axios';

const HouseSearch = () => {

    const [zipcode, setZipcode] = useState('');
    const [houses, setHouses] = useState([]);

    const handleSearch = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://realty-in-us.p.rapidapi.com/properties/v3/list',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd9ab22c256msh526eefec5627f17p132f48jsn17bb79a286da',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
      },
      data: {
        limit: 10,
        offset: 0,
        postal_code: zipcode,
        status: ['for_sale', 'ready_to_build'],
        sort: {
          direction: 'desc',
          field: 'list_date'
        }
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setHouses(response.data.data.home_search.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
       <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Enter Zip Code"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {houses.map((house, index) => (
          <div key={index}>
            <h3>{house.location.address.city}, {house.location.address.state_code}</h3>
            <p>Postal Code: {house.location.address.postal_code}</p>
            <p>List Price: ${house.list_price}</p>
            <img src={house.primary_photo.href} alt="Primary Photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseSearch;
