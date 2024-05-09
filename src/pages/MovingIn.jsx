import React from "react"
import Header from "../components/Header"
import '../cssFiles/Resources.css'

function MovingIn(){
    return(
            <div className="body">
                <Header />
                <div className="text1">
                    <h1 className="title">First-Time Home Purchase and Lease</h1>
                    <div className="center">
                        <p className="paraR">Moving into your first home is filled with emotions from excitment to worry! Knowing the right steps to take for your financial health from the start can save you from years of debt and stress. Below are some tips and resources to check out before investing in your first home!</p>       </div>
                </div>
                
                <div className="backboxR">
                    <h2 className="title">Home-buyer Checklist</h2>
                    <br></br>
                 <ul>
                       <li>Figure out how much you can afford by assesing your credit score, income, and financial security.</li>
                       <br></br>
                       <li>Learn about your rights as a home-buyer in your state.</li>
                       <br></br>
                       <li>Reach out to your bank to learn about the different loan and insurance options.</li>
                       <br></br>
                       <li>Many states offer homebuying program. <a href="https://www.hud.gov/topics/rental_assistance/local">Visit your state website</a> to learn about the benefits offered to you.</li>
                       <br></br>
                       <li>Use HackStreet to find the home for you! </li>
                       <br></br>
                       <li>Connect with a real estate agent or simply reach out to the homeowners to dicuss an offer.</li>
                    </ul>
               
                
                </div>

               <div className = "parent">
                <div className="smallBox">
                    <h2 className="title">Credit Score</h2>
                   <p>It is important to maintain a strong credit score before investing in a home. A credit score is a prediction of your credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports. You can learn more about the factors that influence your credict score and ways to maintain a strong score <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-score-en-315/">here.</a></p>
                </div>
                <div className="smallBox">
                    <h2 className="title">Resources</h2>
                    <ul>
                        <li>
                            <a href="https://www.hud.gov/topics/buying_a_home">U.S. Department of Housing and Urban Development</a>
                        </li>
                        <br></br>
                        <li>
                            <a href="https://www.investopedia.com/articles/mortgages-real-estate/08/homebuyer-financing-option.asp">Loans for first time home buyers</a>
                        </li>
                        <br></br>
                        <li>
                            <a href="https://www.nerdwallet.com/article/mortgages/programs-help-first-time-homebuyers">A Beginner’s Guide</a>
                        </li>
                    </ul>
                  
                </div>

                </div>
                </div>
                
               
                
                )
    
    }
    
    export default MovingIn