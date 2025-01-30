// Write a function that validates an HTTP request object. The object has the properties method, uri, version, and message. 

// Your function will receive the object as a parameter and has to verify that each property meets the following requirements:

// •	method - can be GET, POST, DELETE or CONNECT
// •    uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; 
//      all letters are Latin; the URI cannot be an empty string
// •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// •	message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")

// If a request is valid, return it unchanged. 
// If any part fails the check, throw an Error with the message "Invalid request header: Invalid {Method/URI/Version/Message}". 
// Replace the part in curly braces with the relevant word. Note that some of the properties may be missing, in which case the request is invalid. 
// Check the properties in the order in which they are listed above. If more than one property is invalid, throw an error for the first encountered.

// Input / Output
// Your function will receive an object as a parameter. Return the same object or throw an Error as described above as an output.



function solve(obj) {

    const methods = [
        'GET', 'POST', 'DELETE', 'CONNECT'
    ];

    const versions = [
        'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'
    ];

    const regexURI = /^[a-zA-Z.0-9]+$/gm;

    const regexMessage = /[<>&'"\\]/gm;

    if (!obj.hasOwnProperty('method') || !methods.includes(obj.method)) {

        throw new Error('Invalid request header: Invalid Method');

    }

    if (!obj.hasOwnProperty('uri') || !regexURI.test(obj.uri) || obj.uri === '') {

        throw new Error('Invalid request header: Invalid URI');

    }

    if (!obj.hasOwnProperty('version') || !versions.includes(obj.version)) {

        throw new Error('Invalid request header: Invalid Version');

    }

    if (!obj.hasOwnProperty('message') || regexMessage.test(obj.message)) {

        throw new Error('Invalid request header: Invalid Message');

    }

    return obj;

}


console.log(solve({

    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
    
    }));