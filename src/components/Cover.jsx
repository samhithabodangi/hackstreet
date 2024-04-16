import React from 'react'
import videoBg from '../assets/video.mp4'
import HeaderShift from '../components/HeaderShift'

function Cover() {
  return (
    <div className='cover'> 
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome to HackStreet!</h1>
            <p>Hack Your Way Home: Where Dreams and Houses Meet</p>
        </div>
    </div>
  )
}

export default Cover