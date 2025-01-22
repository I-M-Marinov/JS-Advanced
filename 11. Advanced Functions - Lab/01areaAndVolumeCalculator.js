// Write a function that calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z)

// Input

// You will receive 3 parameters - the functions area and vol and a string, which contains the figures' coordinates.
// For more information check the examples.

// Output
// The output should be returned as an array of objects. Each object has two properties: the figure's area and volume.

// [
// { area: ${area1}, volume: ${volume1} },
// { area: ${area2}, volume: ${volume2} },
// . . .
// ]

function area() {

    return Math.abs(this.x * this.y);
    
    }

function vol() {

    return Math.abs(this.x * this.y * this.z);
    
    }

    function solve(area, vol, inputAsJson){

        const input = JSON.parse(inputAsJson);

        const result = [];

        for (const box of input) {
            result.push({
                area: area.call(box),
                volume: vol.call(box)
            })
        }

        return result;
    }

   console.log( solve(area, vol, 
    `[ {"x":"1","y":"2","z":"10"}, 
       {"x":"7","y":"7","z":"10"}, 
       {"x":"5","y":"2","z":"10"} ]`));
   