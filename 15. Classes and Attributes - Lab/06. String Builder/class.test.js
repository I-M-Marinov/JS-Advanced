import { expect } from 'chai';

class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be a string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
  }


 /* Functionality

The above code defines a class that holds characters (strings with length 1) in an array. An instance of the class should support the following operations:
•	Can be instantiated with a passed in string argument or without anything
•	Function append(string) - converts the passed in string argument to an array and adds it to the end of the storage
•	Function prepend(string) - converts the passed in string argument to an array and adds it to the beginning of the storage
•	Function insertAt(string, index) - converts the passed in string argument to an array and adds it at the given index 
    (you only need to test the behavior when the index is in range)
•	Function remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive), 
    length number of characters (you only need to test the behavior when the index is in range)
•	Function toString() - returns a string with all elements joined by an empty string
•	All passed in arguments should be strings. If any of them are not, throws a type error with the following message: 'Argument must be a string' */

  

describe("StringBuilder", function() {
    
    describe("Initialization tests", function() {
        it("should be a class", function() {
            expect(typeof StringBuilder).to.equal('function');
        });

        it("should initialize correctly with a string", function() {
            const sb = new StringBuilder("hello");
            expect(sb.toString()).to.equal("hello");
        });

        it("should initialize correctly without arguments", function() {
            const sb = new StringBuilder();
            expect(sb.toString()).to.equal("");
        });

        it("should throw an error if initialized with a non-string argument", function() {
            expect(() => new StringBuilder(5)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({})).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder([])).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe("Method: append tests", function() {
        it("should append correctly", function() {
            const sb = new StringBuilder("hello");
            sb.append(" world");
            expect(sb.toString()).to.equal("hello world");
        });

        it("should throw an error if argument is not a string", function() {
            const sb = new StringBuilder("hello");
            expect(() => sb.append(123)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe("Method: prepend tests", function() {
        it("should prepend correctly", function() {
            const sb = new StringBuilder("world");
            sb.prepend("hello ");
            expect(sb.toString()).to.equal("hello world");
        });

        it("should throw an error if argument is not a string", function() {
            const sb = new StringBuilder("hello");
            expect(() => sb.prepend(null)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe("Method: insertAt tests", function() {
        it("should insert at the correct index", function() {
            const sb = new StringBuilder("hello");
            sb.insertAt(" world", 5);
            expect(sb.toString()).to.equal("hello world");
        });

        it("should throw an error if argument is not a string", function() {
            const sb = new StringBuilder("hello");
            expect(() => sb.insertAt(10, 2)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe("Method: remove tests", function() {
        it("should remove characters correctly", function() {
            const sb = new StringBuilder("hello world");
            sb.remove(5, 6);
            expect(sb.toString()).to.equal("hello");
        });

        it("should not fail if length exceeds string size", function() {
            const sb = new StringBuilder("hello");
            sb.remove(2, 10);
            expect(sb.toString()).to.equal("he");
        });
    });

    describe("Method: toString tests", function() {
        it("should return the correct string", function() {
            const sb = new StringBuilder("test");
            expect(sb.toString()).to.equal("test");
        });

        it("should return an empty string when no characters are present", function() {
            const sb = new StringBuilder();
            expect(sb.toString()).to.equal("");
        });
    });
});
