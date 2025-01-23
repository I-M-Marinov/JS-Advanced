// Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.

// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console

// Input
// Check the examples below to see how your code will be executed.

// Output
// Whenever you receive the command print, the output should be printed on the console.


function solution() {
    let internalString = '';

    function append(string) {
        this.internalString += string;
    }

    function removeStart(n) {
        this.internalString = this.internalString.slice(n);
    }

    function removeEnd(n) {
        this.internalString = this.internalString.slice(0, -n);
    }

    function print() {
        console.log(this.internalString);
    }

    return {
        append: function (string) {
            append.call(this, string);
        },
        removeStart: function (n) {
            removeStart.call(this, n);
        },
        removeEnd: function (n) {
            removeEnd.call(this, n);
        },
        print: function () {
            print.call(this);
        },
        internalString: internalString,
    };
}

let firstZeroTest = solution();


firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();