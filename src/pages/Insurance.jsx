import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'

function Insurance(){
    return(
            <div className="body">
                <Header />
                <div className="text1">
                    <h1 className="title">Financial Health</h1>
                    <div className="center">
                        <p className="paraR">A mortgage is a loan granted by a lender to a borrower to finance the purchase of a property. Mortgage loans are often used to cover the cost of buying large-ticket items such as cars or real estate. Mortgages come with an interest rate that can vary depending on the borrower's credit score and financial standing.</p>       </div>
                </div>
                <div className="parent">
                <div className="backboxR">
                    <h2 className="title">Emergency Fund</h2>
                    <br></br>
                 <ul>
                        <li>Fixed-Rate: interest rate remains consistent over the years and offer borrowers with predictable monthly payments.</li>
                        <li>Adjustable-Rate: interest rate changes due to market conditions; could provide short-term benefits, but larger payments in the long run.</li>
                        <li>Reverse:allow senior homeowners to access their home's equity with no repayment due on the loan until after the homeowner leaves the property or passes away. These mortgages provide a beneficial option for older homeowners who have limited income or have experienced drastic decreases in their retirement savings due to economic uncertainty. </li>
                    </ul>
                </div>
                <div className="backboxL">
                    <h2 className="title">Budgeting</h2>
                    <ul>
                        <li>The size of the loan</li>
                        <li>The interest rate and any associated points</li>
                    </ul>
                </div>
                <div className="backboxL">
                    <h2 className="title">Debt</h2>
                    <ul>
                        <li>The size of the loan</li>
                        <li>The interest rate and any associated points</li>
                    </ul>
                </div>
                
                </div>
              
               
                </div>
                )
    
    }
    
    export default Insurance