const circle = require('./circle.js');

const radius = 5;

const circumference = circle.circumference(radius);
console.log(`The circumference of a circle with radius ${radius} is ${circumference}.`);

const area = circle.area(radius);
console.log(`The area of a circle with radius ${radius} is ${area}.`);