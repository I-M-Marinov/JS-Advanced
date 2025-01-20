/* 
Your task is to convert from one distance unit to another by adding a click event listener to a button. 
When it is clicked, read the value from the input field and get the selected option from the input and output units dropdowns. 
Then calculate and display the converted value in the disabled output field.

•	Multiply the incoming distance by the following conversion rates to convert to meter

•	Divide to convert from meters to the required output unit

•	To see which option is selected, read the properties of its parent: value gives you the value of the selected option (as displayed in the HTML), 
selectedIndex gives you the 0-based index of the selected option. For example, if miles are selected, inputUnits.value is "mi", inputUnits.selectedIndex is 4. Option text is irrelevant

•	Use the following table information to do that:

                1 km	1000 m
                1 m	    1 m
                1 cm	0.01 m
                1 mm	0.001 m
                1 mi	1609.34 m
                1 yrd	0.9144 m
                1 ft	0.3048 m
                1 in	0.0254 m
           
*/

function attachEventsListeners() {


    const inputDistanceFieldElement = document.getElementById('inputDistance');
    const outputDistanceFieldElement = document.getElementById('outputDistance');
    const selectedInputUnitsElement = document.getElementById('inputUnits');
    const selectedOutputUnitsElement = document.getElementById('outputUnits');
    const convertButtonElement = document.getElementById('convert');

    convertButtonElement.addEventListener('click', () =>{

        function convertNumberToMeters(number){
            switch (selectedInputUnitsElement.value) {
                case 'km':
                    number *= 1000;
                    break;
                case 'cm':
                    number /= 100;
                    break;
                case 'mm':
                    number /= 1000;
                    break;
                case 'mi':
                    number *= 1609.34;
                    break;
                case 'yrd':
                    number *= 0.9144;
                    break;
                case 'ft':
                    number *= 0.3048;
                    break;
                case 'in':
                    number *= 0.0254;
                    break; 
            }
            return number;
        }

        function convertNumber(number){
            switch (selectedOutputUnitsElement.value) {
                case 'km':
                    number /= 1000;
                    break;
                case 'cm':
                    number *= 100;
                    break;
                case 'mm':
                    number *= 1000;
                    break;
                case 'mi':
                    number /= 1609.34;
                    break;
                case 'yrd':
                    number /= 0.9144;
                    break;
                case 'ft':
                    number /= 0.3048;
                    break;
                case 'in':
                    number /= 0.0254;
                    break; 
            }
            return number;
        }

        outputDistanceFieldElement.removeAttribute('disabled');
        const inputNumber = Number(inputDistanceFieldElement.value);
        outputDistanceFieldElement.value = Number(convertNumber(convertNumberToMeters(inputNumber)));

    });

}   