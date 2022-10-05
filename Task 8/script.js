/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  // this.sum = () => this.a + this.b;
  // this.sub = () => this.a - this.b;
  // this.multi = () => this.a * this.b;
  // this.div = () => this.a / this.b;
}

Calculator.prototype.sum = function () {
  return this.a + this.b;
};
Calculator.prototype.sub = function () {
  return this.a - this.b;
};
Calculator.prototype.multi = function () {
  return this.a * this.b;
};
Calculator.prototype.div = function () {
  return this.a / this.b;
};

const calculator = new Calculator(30, 6);
console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.multi());
console.log(calculator.div());
