"use strict";
/*Задача 1*/
function solveEquation(a, b, c) {
  let arr = [];

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    arr;
  } else if (D === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  }

  return arr;
}

/*console.log(solveEquation(2, 48, 5));*/

/*Задача 2*/

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) === true) {
    return false; /*Работаем с Number*/
  }

  let P = percent / 100 / 12; /*Месячная ставка*/

  let S = amount - contribution; /* Тело кркдита*/

  let mountPayment =
    S * (P + P / ((1 + P) ** countMonths - 1)); /*Ежемесячный платеж*/

  let paymentTotal = Number(
    (mountPayment * countMonths).toFixed(2)
  ); /*Общая сумма выплат*/

  return paymentTotal;
}

/*console.log(calculateTotalMortgage(2, 5000, 100000, 36));*/
