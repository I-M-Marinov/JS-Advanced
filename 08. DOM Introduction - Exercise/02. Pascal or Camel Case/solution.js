/* 
An HTML file is given and your task is to write a function that takes two string parameters as an input and transforms the first parameter 
to the type required by the second parameter.

•	The first parameter will be the text that you need to modify depending on the second parameter. The words in it will always be separated by space.

•	The second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"

When the button is clicked the function should convert the first string to either of the cases. 
The output should consist of only one word - the string you have modified. Once your output is done, 
you should set it as HTML to the <span> element. For more information, see the examples below:

                                    Example

            Input               	                        Output
"this is an example", "Camel Case"	                 thisIsAnExample
"secOND eXamPLE", "Pascal Case"	                      SecondExample
"Invalid Input", "Another Case"	                        Error!
*/

function solve() {

  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");
  let result = "";
  const words = text.split(" ");

  if (namingConvention === "Camel Case") {
    result = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  } else {
    resultElement.textContent = "Error!";
    return resultElement.textContent;
  }

  resultElement.textContent = result;
  return resultElement.textContent;
}