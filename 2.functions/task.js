function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = +(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}
