import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'

function Resources() {
    return(
        <div className="body">
            <Header />
            <div className="text1">
                <h1 className="title">Learn Finances</h1>
                <div className="center">
                    <p className="para">Financial literacy is a life skill and the key to a successful future. However, learning about money and finance can be overwhelming. Luckily, this webpage contains everything you need to know before buying a house. Press any of the buttons below to learn more!</p>
                </div>
            </div>
            <div className="flex">
                <div className="box">
                    <h4>Down Payments <br /> and Mortgages</h4> 
                </div>
                <div className="box">
                    <h4>Interest Rates <br /> and Loan Types</h4>
                </div>
                <div className="box">
                    <h4>Insurance</h4>
                </div>
                <div className="box">
                    <h4>Financial Health <br /> and Security</h4>
                </div>
                <div className="box">
                    <h4>Closing Costs and <br /> Move-In Expenses</h4>
                </div>
            </div>
        </div>
    )
}

export default Resources