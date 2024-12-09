const numberString = "1,2,2";

function stringCalculator(numberData) {
  if (numberData === "") return 0;
  const numbers = parseNumber(numberData);
  checkNegativeAndThrow(numbers)  
  return findSum(numbers);
}

function parseNumber(numberData) {
  var cleanString = numberData.replace(/[\n;,/]/g, " ");
  const numbers = cleanString.split(" ").map(Number);
  return numbers;
}

function checkNegativeAndThrow(data){
  const foundNegative = data.filter((element) => element < 0);
  if (foundNegative.length > 0)
   throw new Error(`Negative numbers not allowed:${foundNegative}`);
}

function findSum(data) {
  const sum = data.reduce((acc, value) => {
    return acc + value;
  });
  return sum;
}

module.exports = stringCalculator;
