/* 
In this problem, you should create a JS functionality that encodes and decodes some messages which travel to 
the network.

This program should contain two functionalities.
The first one is to encode the given message and send it to the receiver. 
The second one is to decode the received message and read it (display it).
When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:

•	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message
•	Clear the sender textarea and add the encoded message to the receiver textarea

After clicking the [Encode and send it] button the result should be:

After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
•	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
•	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable


*/

function encodeAndDecodeMessages() {

    const textAreaOneElement = document.querySelectorAll('textarea')[0];
    const textAreaTwoElement = document.querySelectorAll('textarea')[1];

    const encodeButtonElement = document.querySelectorAll('button')[0];
    const decodeButtonElement = document.querySelectorAll('button')[1];

    let encodedString = '';
    let decodedString = '';

    encodeButtonElement.addEventListener('click', (event) => {

        encodedString = '';

        let charArrayToEncode = Array.from(textAreaOneElement.value);

        for (let i = 0; i < charArrayToEncode.length; i++) {

            let encodedCharCode = charArrayToEncode[i].charCodeAt() + 1;
            let encodedChar = String.fromCharCode(encodedCharCode);

            encodedString += encodedChar;
            textAreaTwoElement.value = encodedString.trim();
        }

        textAreaOneElement.value = '';
    });


    decodeButtonElement.addEventListener('click', () => {

        let charArrayToDecode = Array.from(encodedString);

        for (let i = 0; i < charArrayToDecode.length; i++) {

            let decodedCharCode = charArrayToDecode[i].charCodeAt() - 1;
            let decodedChar = String.fromCharCode(decodedCharCode);

            decodedString += decodedChar;
        }

        textAreaTwoElement.value = decodedString.trim();
    });


}