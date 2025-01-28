function sumRange(array, startIndex, endIndex) {
    try {

        if (!Array.isArray(array)) {
            return NaN;
        }

        startIndex = Math.max(0, startIndex); 
        endIndex = Math.min(array.length - 1, endIndex); 

        let sum = 0;

        for (let i = startIndex; i <= endIndex; i++) {

            const currentValue = Number(array[i]);

            if (isNaN(currentValue)) {
                return NaN; 
            }
            sum += currentValue;
        }

        return Number.isInteger(sum) ? sum : Number(sum.toFixed(1));

    } catch (error) {
        return NaN;
    }
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300)); // Output: 150
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // Output: 3.3
console.log(sumRange([10, 'twenty', 30, 40], 0, 2)); // Output: NaN
console.log(sumRange([], 1, 2)); // Output: 0
console.log(sumRange('text', 0, 2)); // Output: NaN
