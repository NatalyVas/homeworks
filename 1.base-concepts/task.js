"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  if (d === 0) {
    arr.push(-b/2*a);
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentIn = Number(percent);
  if (isNaN(percentIn)) {
    console.log(`Параметр процентной ставки содержит неправильное значение ${percent}`);
    return false;
  }

  let contributionIn = Number(contribution);
  if (isNaN(contributionIn)) {
    console.log(`Параметр суммы первоначального взноса содержит неправильное значение ${contribution}`);
    return false;
  }

  let amountIn = Number(amount);
  if (isNaN(amountIn)) {
    console.log(`Параметр суммы кредита содержит неправильное значение ${amount}`);
    return false;
  }

  let countMonthsIn = Number(countMonths);
  if (isNaN(countMonthsIn) || countMonthsIn < 0) {
    console.log(`Параметр колличества месяцев содержит неправильное значение ${countMonths}`);
    return false;
  }

  let bodyOfMortgage = amountIn - contributionIn;
  let interestRate = percentIn/100/12;
  
  let payOfMonth = bodyOfMortgage * (interestRate + (interestRate / ((Math.pow((1 + interestRate), countMonthsIn)) - 1))); 
  let totalPay = payOfMonth * countMonthsIn;
  totalPay = +(totalPay.toFixed(2));
  return totalPay;
}