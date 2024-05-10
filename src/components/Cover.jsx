import React from 'react'
import videoBg from '../assets/Welcome to HackStreet!.mp4'
import pic from '../assets/house.jpeg'
import HeaderShift from '../components/HeaderShift'
import flit from '../assets/flit.png'
import decision from '../assets/decision.png'
import filter from '../assets/Filter.png'
import '../cssFiles/About.css'

function Cover() {
  return (
    <div className='cover'> 
        <div className="overlay">
        <video src={videoBg} autoPlay loop muted width = "500"/>
        </div>
        <div className = "back">
        <img className="image" src={pic}/>

        <div className="forSale discoverBottom">
            <div className="forSaleTextL">
                <h1>Hack Your Way Home</h1>
                <p className="discoverText2">HackStreet is a web-based application to help you find the home that meets your wants and needs. Our mission is to make finding your perfect home easy, accessible, and approachable by providing up to date house listings and unique features. Our resources are designed to help anyone and everyone find the best fit for them. </p>
        
        </div>
        </div>
        </div>

        <div className="parent">
       
        <div className="greenBox">
        <img className="Simage" src={filter}></img>

             <h2>Advanced Search Filters </h2>
            <p>We provide numerous search filters to help you short list the houses that meet your need.</p>
               
            </div>
            <div className="greenBox">
            
            <img className="Simage" src={decision}/>
             <h2>Decision Making Tools</h2>
            <p>Making big decisions is hard! Use our decision making tools to prioritize your needs and compare houses.</p>
            </div>
            
            <div className="greenBox">
            <img className="Simage" src={flit}/>
               
                <h2>Financial Literarcy </h2>
                <p>First time buying a house? Don't know where to begin? Use our resources to build a strong financial foundation for your house.</p>
            </div>
          </div>
          <div className = "footer">
            <br></br>
          </div>
   
    </div>
  )
}

export default Cover