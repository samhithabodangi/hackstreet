import React from "react"
import Header from "../components/Header"
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
            <Header />
            <div className="text1">
                <h1 className="title">Learn Finances</h1>
                <div className="center">
                    <p className="paraR">Financial literacy is a life skill and the key to a successful future. However, learning about money and finance can be overwhelming. Luckily, this webpage contains everything you need to know before buying a house. Press any of the buttons below to learn more!</p>
                </div>
            </div>
            <div className="flex">
                <div className="box">
                    <div className = "title"><Link to="/mortage">Mortgage</Link></div>
                    <FontAwesomeIcon icon={faHouse} class="resourceIcon"/>
                </div>
                <div className="box">
                    <div><Link to="/InterestRate">Interest Rate</Link></div>
                    
                    <FontAwesomeIcon icon={faHandHoldingDollar} class="resourceIcon"/>
                </div>
              
                <div className="box">
                    <h4>Financial Health <br /> and Security</h4>
                    <div><Link to="/insurance">Insurance Rate</Link></div>
                    <FontAwesomeIcon icon={faSackDollar} class="resourceIcon"/>
                </div>
                <div className="box">
                    <h4>Closing Costs and <br /> Move-In Expenses</h4>
                    <FontAwesomeIcon icon={faHandshake} class="resourceIcon"/>
                </div>
            </div>
        </div>
    )
}

export default Resources