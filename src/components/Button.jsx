import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const MyButton = ({ to }) => { 
  
    return ( 
        <a href={`/${to}`}> 
            <button className="my-button"> 
                Take me to {to === '' ? "home" : to} 
            </button> 
        </a> 
    ) 
} 
  
export default MyButton;