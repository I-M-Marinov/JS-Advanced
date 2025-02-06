// Write a function that receives a class and attaches to it a property species with the value "Human" and a function toSpeciesString(). 
// When called, the function returns a string with the format:

// "I am a <species>. <toString()>"

// The function toString() is called from the current instance (call using this).

// Input / Output
// Your function will receive a class whose prototype it should extend. There is NO output, your function should only attach the properties to the given class’ prototype.

class Developer{
    constructor(name, language, awkwardLevel){
        this.name = name,
        this.language = language,
        this.awkwardLevel = awkwardLevel
    }

    toString() {
        return `My name is ${this.name} and I code in ${this.language}.`;
    }
}


function extendPrototype(classToExtend) {

    classToExtend.prototype.species = 'Human';

    classToExtend.prototype.toSpeciesString = function () {

        return `I am a ${this.species}. ${this.toString()}`;
    }
    
}

extendPrototype(Developer);

let dev = new Developer('Gosho', 'JavaScript', '99');

console.log(dev.toString()); // My name is Gosho and I code in JavaScript.
console.log(dev.toSpeciesString()); // I am a Human. My name is Gosho and I code in JavaScript.

