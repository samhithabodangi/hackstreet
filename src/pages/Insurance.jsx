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
                        <p className="paraR">Financial health describes the state and stability of an individual's personal finances. Below are some ways to invest in habits and programs to maintain long-term financial stability.</p>       </div>
                </div>
                
                <div className="backboxR">
                    <h2 className="title">Assessing Financial Health</h2>
                    <br></br>
                 <ul>
                       <li>How prepared are you for unexpected events? Do you have an emergency fund?</li>
                       <br></br>
                       <li>What is your net worth?</li>
                       <br></br>
                       <li>Do you have the things you need in life? How about the things you want?</li>
                       <br></br>
                       <li>What percent of your debt would you consider high interest, such as credit cards? Is it more than 50%?</li>
                       <br></br>
                       <li>Are you actively saving for retirement? Do you feel you’re on track to meet your long-term goal? </li>
                       <br></br>
                       <li>Do you have enough insurance coverage—whether it be health or life?</li>
                    </ul>
               
                
                </div>
                <div className="parent">
                <div className="backboxL">
                    <h2 className="title">Budgeting</h2>
                   <p>It is important to track your spendings and savings to objectively assess long term financial healh. Consider using spreadsheets and mobile apps to track your spendings, and allocate a certain amount each month to different aspects of your life such as groceries, mortgage, etc.</p>
                </div>
                <div className="backboxL">
                    <h2 className="title">Emergency Fund</h2>
                 <p>  Having an emergency fund is key to ensuring financial stability in case of major of life events. Aim to save about 3-6 months of living expenses in this fund. </p> 
                </div>
                <div className="backboxL">
                    <h2 className="title">Debt</h2>
                    <p>There are many methods to pay off your debts. The two most popular ways are either the avalance or snowball method.  The avalanche method suggests paying as much as possible toward the highest interest debt while paying the minimum on all others. The snowball, meanwhile, suggests taking the smallest debt balance first and then work your way up to the largest debt. You can learn more about the benefits and drawbacks <a href="https://www.investopedia.com/articles/personal-finance/080716/debt-avalanche-vs-debt-snowball-which-best-you.asp">here.</a> </p>
                </div>
                </div>

                <div className="backboxR">
                    <h2 className="title">Additional Tips</h2>
                    <br></br>
                 <ul>
                       <li>Automate bill pay and savings.</li>
                       <br></br>
                       <li>Seek free checking and free accounts.</li>
                       <br></br>
                       <li>Look for multiple options for insurance, cable, and other recurring expenses.</li>
                       <br></br>
                       <li>Use the 50/30/20 budgeting method to spend  50% on needs, 30% on wants and saving 20% of your income. This 20% could include debt reduction if you have high-interest debts. </li>
                       <br></br>
                       <li>Try to limit spending on housing (rent or mortgage) to not more than 40% of your income.</li>
                       <br></br>
                       <li>Invest early and often; try to put 10-15% of your income directly into a retirement account</li>
                    </ul>
                </div>
              
               
                </div>
                )
    
    }
    
    export default Insurance