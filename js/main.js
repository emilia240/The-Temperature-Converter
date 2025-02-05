/* 
It's hot out! Let's make a converter based on the steps here. (http://www.mathsisfun.com/temperatureconversion.
    html)
    • Store a celsius temperature into a variable.
    • Convert it to fahrenheit and output "NN°C is NN°F".
    • Now store a fahrenheit temperature into a variable.
    • Convert it to celsius and output "NN°F is NN°C."
 */

/* 
    °C to °F:   Divide by 5, then multiply by 9, then add 32

    °F to °C:   Subtract 32, then multiply by 5, then divide by 9 
*/

/* console.log(`${}°C is ${}°F`);
console.log(`${}°F is ${}°C`); */


let celTemp = [ 4, 10, 24, -2];
let fahrTemp = [80, 200, 40, -10];

function pickRandomValues(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

let randomCelTemp = pickRandomValues(celTemp);
let randomFahrTemp = pickRandomValues(fahrTemp);

let celtToFahr = Math.round((randomCelTemp/5 * 9) + 32);
let fahrToCel = Math.round((randomFahrTemp - 32) * 5/9);


console.log(`${randomCelTemp}°C is ${celtToFahr}°F. ${randomFahrTemp}°F is ${fahrToCel}°C`);


//button and message

const calculateButton = document.getElementById('calculate_button');
const resultMessage = document.getElementById('result');

// an event listener
calculateButton.addEventListener('click', () => {
    let randomCelTemp = pickRandomValues(celTemp);
    let randomFahrTemp = pickRandomValues(fahrTemp);
    let celtToFahr = Math.round((randomCelTemp/5 * 9) + 32);
    let fahrToCel = Math.round((randomFahrTemp - 32) * 5/9);
    resultMessage.textContent = `${randomCelTemp}°C is ${celtToFahr}°F. ${randomFahrTemp}°F is ${fahrToCel}°C`;
});