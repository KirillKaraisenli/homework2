// 1

let celsius = 467;

let fahrenheit = (celsius * 1.8) + 32;
console.log(`Конвертація ${celsius}°C = ${fahrenheit}°F`);

// 2

let days = 31;

let hours = days * 24;

let minutes = hours * 60;
console.log(`Днів у місяці ${days}, годин у місяці ${hours}, хвилин у місяці ${minutes}.`);

// 3

let playerHealth = 100;
let playerEnergy = 75;

playerHealth -= 20;
playerEnergy -= 15;

console.log(`Здоров'є гравця = ${playerHealth}; Енергія гравця = ${playerEnergy}.`);

// 4

let purchase = 467;
let purchaseWithDiscount = purchase - purchase /100 * 10;

console.log(`Сумма без знижки = ${purchase}грн; Сумма зі знижкою 10% = ${purchaseWithDiscount}грн;`);

// 5

let Numbers = 5.87;
let roundedNumbers = Math.floor(Numbers);

console.log(`Оригінальне число: ${Numbers}; Округлене число: ${roundedNumbers};`);

// 6

let numberString = 121.52;
let wholeNumber = parseFloat(numberString);

console.log(`Оригінальне число: ${numberString}; Число з плаваючою комою: ${wholeNumber};`);

// 7

let numberLine = 121.40;
let commaNumber =  parseInt(numberLine);

console.log(`Оригінальне число: ${numberLine}; Число з плаваючою комою: ${commaNumber};`);

// 8

let numberUsual = 144;
let squareNumber =  Math.sqrt(numberUsual);

console.log(`Оригінальне число: ${numberUsual}; Число з плаваючою комою: ${squareNumber};`);

// 9

let integerNumber = 42;

let stringNumber = "123";

let parsedNumber = parseInt(stringNumber);
console.log("Результат parseInt():", parsedNumber);

let stringifiedNumber = integerNumber.toString();
console.log("Результат toString():", stringifiedNumber);
