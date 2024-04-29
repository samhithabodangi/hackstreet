import React from 'react';

function DecisionMatrix() {

    var score;

    for (let i = 0; i < favHouses.size(); i++) {

        score = userWalkscore * favHouses.get(i).getWalkscoreScore() + userPrice * favHouses.get(i).getPriceScore();
        favHouses.get(i).setScore(score);

    }

    favHouses.sort(function(a, b) {

        return a.score - b.score;

    })

    return(

        <div>



        </div>

    ) 

        

    

}

export default DecisionMatrix