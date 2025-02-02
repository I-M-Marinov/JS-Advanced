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

  