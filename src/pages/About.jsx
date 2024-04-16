import React from "react"
import HeaderShift from "../components/HeaderShift"
import '../cssFiles/About.css'
import '../App.css'

function About() {
    return(
        <div>
            <HeaderShift />

        

        

            <div class="intro">
            <h1 class = "big centered">What is Hackstreet?</h1>
            <h3 class = "centered">Hackstreet's mission is to make finding your perfect home easy, accessible, and approachable.</h3>
            </div>

            <div class = "row">

            <div class="blurbLeft">
            <h2 class = "centered">How does it work?</h2>
            <p class = "text">Using a decision matrix, Hackstreet takes your inputted preferences of location, price, and status to recommend viable housing for your individual situation. </p>
            </div>

            <div class = "Square1">picture of decision matrix or something</div> 

            </div>
            <div class = "row"> {/* g j */} 

            <div class = "Square2">picture of finance or something</div>

            <div class="blurbRight">
            <h2 class = "centered">Finance? We've got you covered.</h2>
            <p class = "text">Finance isn’t easy. A lot needs to be considered when finding a home perfect for you. Our finance page has been made to make learning the ins and outs of this life skill easily approachable.</p>
            </div>

            </div>
            <div class = "row">

            <div class = "blurbLeft">
            <h2 class = "centered">Stay connected.</h2>
            <p class = "text">Sign up today to track your journey in financial literacy and keep home options accessible in one place!</p>
            </div>

            <div class = "Square3">picture of decision matrix or something</div> 
            </div>


        </div>
    )
}

export default About