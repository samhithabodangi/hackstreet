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
import SimpleInterst from '../assets/SimpleInterest.png'
import Compound from '../assets/Compound.png'


function InterestRate() {
    return(
        <div className="body">
            <Header />
            <div className="text1">
                <h1 className="title">Interest Rate</h1>
            </div>
            <div className="parent">
            <div className="backboxL">
                <h2 className="title">What</h2>
                <p>The interest rate is the amount charged on top of the principal by a lender to a borrower for the use of assets.</p>
            </div>
            <div className="backboxL">
                <h2 className="title">Why</h2>
                <p>Interest Rates are charged by banks to make profit on long-term loans and mortgages. Interest Rates are greatly influenced by the market, your location, and other factors, and are usually set by a country's central bank.</p>
            </div>
            <div className="backboxL">
                <h2 className="title">How</h2>
                <p>Most mortgages use simple interest. However, some loans use compound interest, which is applied to the principal but also to the accumulated interest of previous periods. For loans, the interest rate is applied to the principal, which is the amount of the loan. </p>
            </div>
            
            </div>

            <div className="bigbox">
           
                <h2>Simple Interest</h2>
               
                <p>The formula below is used to calculate Simple Interest over a period of time. This type of interest is usually fixed over a longer period of time. <a href = "https://www.investopedia.com/terms/s/simple_interest.asp">Click here</a> to learn more about Simple Interest.</p>
                
                </div> 
                <img className="rectangleimage" src={SimpleInterst}></img>


                <div className="bigbox">
           
           <h2>Compund Interest</h2>
          
           <p>The formula below is used to calculate Compound Interest over a period of time. Some lenders prefer the compound interest method, which means that the borrower pays even more in interest. Compound interest, also called interest on interest, is applied both to the principal and also to the accumulated interest made during previous periods.  <a href = "https://www.investopedia.com/terms/s/simple_interest.asp">Click here</a> to learn more about Compound Interest.</p>
           
           </div> 

           <br></br>
           <img src={Compound} height="500"></img>

           <div className="bigbox">
          
           <h2>Important Notes</h2>
           <br></br>
          
          <p>The Equal Credit Opportunity Act was passed to prohibits creditors to discriminate against credit applicants. Despite these efforts, there is growing evidence that White people are more likely to be approved for mortgages than others. Race and nationality can also influence the interest rates for home buyers. Be sure to seek several creditors and professional advice when making deicsions about mortgage and interest rates. You can learn more about lending discrimination <a href="https://www.investopedia.com/the-history-of-lending-discrimination-5076948">here.</a></p>
          
          </div> 
          </div>
          

            )

}
       
export default InterestRate