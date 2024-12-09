const numberString = "1,2,2";

function stringCalculator(numberData) {
  if (numberData === "") return 0;
  const numbers = parseNumber(numberData);
  const negativeNumber = findNegative(numbers)
  if(negativeNumber) return negativeNumber
  return findSum(numbers);
}

function parseNumber(numberData) {
  var cleanString = numberData.replace(/[\n;,/]/g, " ");
  const numbers = cleanString.split(" ").map(Number);
  return numbers;
}

function findNegative(data){
  const foundNegative = data.find((element) => element < 0);
  if (typeof foundNegative !== "undefined")
    return `Negative numbers not allowed:${foundNegative}`;
}

function findSum(data) {
  const sum = data.reduce((acc, value) => {
    return acc + value;
  });
  return sum;
}

module.exports = stringCalculator;
