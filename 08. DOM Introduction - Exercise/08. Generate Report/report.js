/* 
You will be given a web page, containing a table and output area. 

When the "Generate Report" button is pressed:
•	You must generate a JSON report from the data inside the table, by only taking the columns, which are selected.
Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. Unchecked columns must be omitted. 

For every row (excluding the header):
•	Create an object with properties for each of its columns.
•	The name of each property is the name attribute of the column’s header, and the value is the text content of the cell.
•	Store the result in an array and output it as a JSON string display it inside the <textarea> with id "output". See the example for details.

Input/Output
There will be input, your program must execute based on the page content. The output must be a JSON string, displayed in the <textarea> with id "output".

*/

function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
    .from(thElements)
    .map((thElement) => {
        const checkboxElement = thElement.querySelector('input[type=checkbox]');
        return {
            name: thElement.textContent.toLowerCase().trim(),
            active: checkboxElement.checked,
        };
    });

    const reportData = Array
    .from(trElements)
    .map(trElement => {
        const tdElements = trElement.querySelectorAll('td');

        const result = Array.from(tdElements)
        .reduce((data, tdElement, i) => {
                if (!columns[i].active){
                    return data;
                }
                const columnName = columns[i].name;
                data[columnName] = tdElement.textContent;

                return data;
        }, {});

        return result;
    });

    outputElement.value = JSON.stringify(reportData), null, 2;
}