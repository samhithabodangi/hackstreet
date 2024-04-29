import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'


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
                    <h4>Down Payments <br /> and Mortgages</h4> 
                    <FontAwesomeIcon icon={faHouse} class="resourceIcon"/>
                </div>
                <div className="box">
                    <h4>Interest Rates <br /> and Loan Types</h4>
                    <FontAwesomeIcon icon={faHandHoldingDollar} class="resourceIcon"/>
                </div>
                <div className="box">
                    <h4>Insurance <br /> <h4 style={{color: "#0E4D1F"}}>.</h4></h4>
                    <FontAwesomeIcon icon={faShield} class="resourceIcon"/>
                </div>
                <div className="box">
                    <h4>Financial Health <br /> and Security</h4>
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