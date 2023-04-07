const PI = Math.PI;

function circumference(radius) {
  return 2 * PI * radius;
}

function area(radius) {
  return PI * radius * radius;
}

module.exports = { circumference, area };