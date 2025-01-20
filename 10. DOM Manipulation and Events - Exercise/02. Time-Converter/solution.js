/* 
Create a program that converts different time units. 
Your task is to add a click event listener to all [CONVERT] buttons. 
When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.

One day is equal to 24 hours/1440 minutes/86400 seconds. 
Whichever button we click, the input fields should change depending on the added value on the left. 
(For example, if we write 48 hours and click convert the days, the field value should change to 2).
*/

function attachEventsListeners() {

    const daysButtonElement = document.getElementById('daysBtn');
    const hoursButtonElement = document.getElementById('hoursBtn');
    const minuteButtonElement = document.getElementById('minutesBtn');
    const secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', () => {
        const daysInputValue = document.getElementById('days').value;
        let hours = Number(daysInputValue * 24);
        let minutes = Number(daysInputValue * 1440);
        let seconds = Number(daysInputValue * 86400);

        const hoursInputElement = document.getElementById('hours');
        const minutesInputElement = document.getElementById('minutes');
        const secondsInputElement = document.getElementById('seconds');
    
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    });

    hoursButtonElement.addEventListener('click', () => {
        const hoursInputValue = document.getElementById('hours').value;
        let days = Number((hoursInputValue / 24).toFixed(2));
        let minutes = Number(hoursInputValue * 60);
        let seconds = Number(hoursInputValue * 60 * 60);

        const daysInputElement = document.getElementById('days');
        const minutesInputElement = document.getElementById('minutes');
        const secondsInputElement = document.getElementById('seconds');
    
        daysInputElement.value = days;
        minutesInputElement.value = minutes;
        secondsInputElement.value = seconds;
    });

    minuteButtonElement.addEventListener('click', () => {
        const minutesInputValue = document.getElementById('minutes').value;
        let days = Number((minutesInputValue / 1440).toFixed(2));
        let hours = Number(minutesInputValue / 60);
        let seconds = Number(minutesInputValue * 60);

        const daysInputElement = document.getElementById('days');
        const hoursInputElement = document.getElementById('hours');
        const secondsInputElement = document.getElementById('seconds');
    
        daysInputElement.value = days;
        hoursInputElement.value = hours;
        secondsInputElement.value = seconds;
    });

    secondsButtonElement.addEventListener('click', () => {
        const secondsInputValue = document.getElementById('seconds').value;
        let days = Number((secondsInputValue / 86400).toFixed(2));
        let hours = Number((secondsInputValue / 3600).toFixed(2));
        let minutes = Number((secondsInputValue / 60).toFixed(2));

        const daysInputElement = document.getElementById('days');
        const hoursInputElement = document.getElementById('hours');
        const minutesInputElement = document.getElementById('minutes');
    
        daysInputElement.value = days;
        hoursInputElement.value = hours;
        minutesInputElement.value = minutes;
    });
}