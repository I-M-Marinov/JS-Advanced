
(function () {
    Array.prototype.last = function () {
        return this.slice(-1)[0];
    };
    
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    
    Array.prototype.sum = function () {
        return this.reduce((acc, curr) => acc + curr, 0);
    };
    
    Array.prototype.average = function () {
        return this.length ? this.sum() / this.length : NaN;
    };
    
})();

arr = [6,5,4,3,2,1]

console.log(arr.last());
console.log(arr.average())