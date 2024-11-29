const numberString = "";

function stringCalculator(numberData) {
  function findSum(data) {
    const sum = data.reduce((acc, value) => {
      if (value < 0) throw new Error("Number is negative");
      return acc + value;
    });
    return sum;
  }
  let sum = 0;
  const strToArray = numberData.split(",").map(Number);
  sum = findSum(strToArray);
  return sum;
}

console.log(stringCalculator(numberString));

module.exports = stringCalculator;
