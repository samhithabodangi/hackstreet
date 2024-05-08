import React from 'react'
import videoBg from '../assets/Welcome to HackStreet!.mp4'
import pic from '../assets/house.jpeg'
import HeaderShift from '../components/HeaderShift'
import flit from '../assets/flit.png'
import decision from '../assets/decision.png'
import filter from '../assets/Filter.png'
import '../cssFiles/About.css'
import '../cssFiles/ZipCode.css';

function Cover() {
  return (
    <div className='cover'> 
        <div className="overlay">
        <video src={videoBg} autoPlay loop muted />
        </div>
        <div className = "back">
        <img className="image" src={pic}/>
        <div className="forSale discoverBottom">
            <div className="forSaleTextL">
                <h1>Hack Your Way Home</h1>
                <p className="discoverText2">HackStreet is a web-based application to help you find the home that meets your wants and needs. Our mission is to make finding your perfect home easy, accessible, and approachable by providing up to date house listings and unique features. Our resources are designed to help anyone and everyone find the best fit for them. </p>
        
        </div>
        </div>

        <div className="parent">
            <div className="backboxR">
            <img className="Simage" src={filter}></img>
            <br></br>
              <div className ="forSaleTextL"> <h1>Advanced Search Filters </h1></div>
               
            </div>
            <div className="backboxR">
            <img className="Simage" src={decision}/>
            <div className ="forSaleTextL"> <h1>Advanced Search Filters </h1></div>
            </div>
            <div className="backboxR">
            <img className="Simage" src={flit}/>
               
                <div className ="forSaleTextL"> <h1>Advanced Search Filters </h1></div>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Cover