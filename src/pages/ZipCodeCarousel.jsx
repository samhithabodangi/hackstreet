import React, { useState } from 'react';
import Heart from "react-heart"
import { latestHomes } from '../data/property';
import '../cssFiles/ZipCode.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ZipCodeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };

  return (
    <div>
      <div>
      <Slider {...settings}>
        {latestHomes.map((data, key) => {
          const [active, setActive] = useState(false);
          return (
            <div key={key} className="sliderCarosiel">
                
              <div className="wholeHouse">
                <img src={`../src/assets/property/${data.image}`} alt="" className="houseImg" />
                
                <div className="houseDetails">
                  
                  <div className="housePrice"> ${data.price}
                    <Heart isActive={active} onClick={() => setActive(!active)} className="heart" />
                  </div>
                   
                  <div className="bedBathDetail">
                    <h4 className="bold marginR marginL">{data.beds} Beds </h4>
                    <h4 className="bold marginR marginL">| {data.baths} Baths </h4>
                    <h4 className="bold ">| {data.floorspace} sq. ft</h4>
                  </div>

                  <div className="homeAddress">{data.address}</div>
                  <div className="houseID">MLS ID {data.id}, Type: {data.type}</div>
                </div>
                
                </div>

              </div>
          );
        })}
        </Slider>

      </div>
    </div>
  );
};

export default ZipCodeCarousel;
