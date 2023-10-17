// made constant variable fro Kelvin
const kelvin = 0;
//made variable celsius relative to Kelvin
let celsius = (kelvin - 273);
// made fahrenheit based on equation
let fahrenheit = (celsius *(9/5) + 32);
// Used Math object with .floor method to round down result
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
console.log(newton);


