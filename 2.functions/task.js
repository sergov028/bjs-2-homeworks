//1

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];

    if (arr[i] > max) max = arr[i];

    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

//console.log(getArrayParams(8));

//2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, cur) => acc + cur);
}

//console.log(summElementsWorker(5, 10));

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

//console.log(differenceMaxMinWorker(10, 100, 1000));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenEl = 0;
  let sumOddEl = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenEl += arr[i];
    } else {
      sumOddEl += arr[i];
    }
  }
  return sumEvenEl - sumOddEl;
}

//console.log(differenceEvenOddWorker(4, 3, 6, 7, 11));

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

//console.log(averageEvenElementsWorker(2, 3, 4, 7, 10));

//3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

//console.log(makeWork(arr, averageEvenElementsWorker));
