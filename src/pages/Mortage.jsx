import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'

function Mortage(){
    return(
        <div className="body">
            <Header />
            <div className="text1">
                <h1 className="title">Mortage</h1>
                <div className="center">
                    <p className="paraR">A mortgage is a loan granted by a lender to a borrower to finance the purchase of a property. Mortgage loans are often used to cover the cost of buying large-ticket items such as cars or real estate. Mortgages come with an interest rate that can vary depending on the borrower's credit score and financial standing.</p>       </div>
            </div>
            <div className="parent">
            <div className="backboxL">
                <h2 className="title">Types of Mortages</h2>
                <br></br>
             <ul>
                    <li>Fixed-Rate: interest rate remains consistent over the years and offer borrowers with predictable monthly payments.</li>
                   <br></br>
                    <li>Adjustable-Rate: interest rate changes due to market conditions; could provide short-term benefits, but larger payments in the long run.</li>
                    <br></br>
                    <li>Reverse:allow senior homeowners to access their home's equity with no repayment due on the loan until after the homeowner leaves the property or passes away. These mortgages provide a beneficial option for older homeowners who have limited income or have experienced drastic decreases in their retirement savings due to economic uncertainty. </li>
                </ul>
            </div>
            <div className="backboxL">
                <h2 className="title">Factors Affecting Mortgage</h2>
                <ul>
                    <li>The size of the loan and the loan type</li>
                    <br></br>
                    <li>Your credit score</li>
                    <br></br>
                    <li>Home location</li>
                    <br></br>
                    <li>Down payment</li>
                    <br></br>
                    <li>The interest rate type and any associated points</li>
                </ul>
            </div>
            </div>
            
            <div className="bigbox">
            <img className="rectangleimage" src="/src/assets/Mortgage.png"></img>
                <h2>Mortgage Payment Forumla</h2>
                <p>The formula above is used to calculate the mortgage on a house over time. To predict the mortgage on your property, please use <a href = "https://www.mortgagecalculator.org/">this Mortgage Calculator.</a> </p>
                <br></br>
                <h2 className="title">Resources</h2>
                <br></br>
    
                <p>Access the resources below to learn more about Mortgage. </p>
                <ul>
                    <li> <a href = "https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-en-99/">What is Mortgage?</a></li>
                    <li> <a href = "https://www.investopedia.com/articles/personal-finance/050115/getting-mortgage-non-us-citizens.asp#:~:text=Many%20banks%20and%20mortgage%20companies,with%20the%20documentation%20you%20need">Mortgage as Non-US Citizens</a></li>
                    <li> <a href = "https://www.consumerfinance.gov/about-us/blog/7-factors-determine-your-mortgage-interest-rate/">Factors That Effect Mortgage Rates</a></li>
                
                </ul>
                </div> 
        
                
           
            </div>
            
            )

}
export default Mortage