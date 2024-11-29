const numberString = "1,2,2";

function stringCalculator(numberData) {
  function findSum(data) {
    if (data.length === 0) return 0;
    const foundNegative = data.find((element) => element < 0);
    // console.log("ssqs22",foundNegative)
    if (typeof foundNegative !== "undefined")
      return `Negative numbers not allowed:${foundNegative}`;
    const sum = data.reduce((acc, value) => {
      return acc + value;
    });
    return sum;
  }
  let sum = 0;

  var cleanString = numberData.replace(/[\n;,/]/g, " ");

  const strToArray = cleanString.split(" ").map(Number);
  sum = findSum(strToArray);
  return sum;
}

console.log(stringCalculator(numberString));

module.exports = stringCalculator;
