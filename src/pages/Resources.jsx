import React from "react"
import HeaderShift from "../components/HeaderShift"
import '../cssFiles/Resources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Resources() {
    return(
        <div className="body">
            <HeaderShift />
            <div className="text1">
                <h1 className="title">Learn Finances</h1>
                <div className="center">
                    <p className="paraR">Financial literacy is a life skill and the key to a successful future. However, learning about money and finance can be overwhelming. Luckily, this webpage contains everything you need to know before buying a house. Press any of the buttons below to learn more!</p>
                </div>
            </div>
            <div className="flex">
            
                    <Link to ="/mortage" className="button"><p>Mortgage</p><FontAwesomeIcon icon={faHouse} className="resourceIcon"/></Link>
               
               
                   <Link to="/InterestRate" className="button"><p>Interest Rate</p><FontAwesomeIcon icon={faHandHoldingDollar} className="resourceIcon"/></Link>
               
                   
                   <Link to="/insurance" className="button"><p>Financial Health</p><FontAwesomeIcon icon={faSackDollar} className="resourceIcon"/></Link>
                   
                
              
                    <Link to="/movingIn" className="button"><p>Homebuyers Guide</p><FontAwesomeIcon icon={faHandshake} className="resourceIcon"/></Link>
                   
             
            </div>
            </div>
      
    )
}

export default Resources