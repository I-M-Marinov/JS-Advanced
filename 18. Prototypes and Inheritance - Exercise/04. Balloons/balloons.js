function solution(){
    class Balloon{
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight); 
            this.ribbon = { color: ribbonColor, length: ribbonLength };
        }

        getRibbon() {
            return this.ribbon;
        }
    }
    
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength); 
            this.text = text;
        }

        getText() {
            return this.text;
        }
    }

    return { Balloon, PartyBalloon, BirthdayBalloon };

}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);

