import React from 'react';

//Variables

var housePrice;
var houseWalkscore;
var score;
var ID;

//Constructor

class House {
    constructor(ID, housePrice, houseWalkscore) {
        this.housePrice = housePrice;
        this.houseWalkscore = houseWalkscore;
        this.ID = ID;
    }
}

/*getPrice() {
    return housePrice;
}

getWalkscore() {
    return houseWalkscore;
}

getWalkscoreScore() {
    return getWalkscore() / 10.0;
}

getPriceScore() {
    var thing = priceMax-priceMin;
    var thing2 = getPrice()-priceMin;
    return (thing/thing2) * 10;
}

setScore(a) {
    score = a;
}
*/
function House() {

    return(
        <div>

        </div>
    )
}

export default House