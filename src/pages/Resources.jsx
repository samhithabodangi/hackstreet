import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Resources() {
    return(
        <div className="resourceBody">
            <Header />
            <div className="text1">
                <h1 className="title">Learn Finances</h1>
                <div className="center">
                    <p className="paraR">Financial literacy is a life skill and the key to a successful future. However, learning about money and finance can be overwhelming. Luckily, this webpage contains everything you need to know before buying a house. Press any of the buttons below to learn more!</p>
                </div>
            </div>
            <div className="flex">
                <Link to ="/mortage" className="button"><p className="shiftUp">Mortgage</p><FontAwesomeIcon icon={faHouse} className="resourceIcon"/></Link>
                <Link to="/InterestRate" className="button"><p className="shiftUp">Interest Rate</p><FontAwesomeIcon icon={faHandHoldingDollar} className="resourceIcon" /></Link>
                <Link to="/insurance" className="button"><p className="shiftUp">Financial Health</p><FontAwesomeIcon icon={faSackDollar} className="resourceIcon shiftUp" /></Link>
                <Link to="/movingIn" className="button"><p className="shiftUp">Homebuyer's Guide</p><FontAwesomeIcon icon={faHandshake} className="resourceIcon shiftUp"/></Link>
            </div>
            </div>
      
    )
}

export default Resources