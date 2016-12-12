var market = [45, 24, 35, 31, 40, 38, 11];


var compArray = [];

for (i = 0; i < market.length; i++) {
  for (j = i + 1; j < market.length; j++) {
    compArray.push(market[j] - market[i]);
  }
}

function getMaxOfArray(compArray) {
  return Math.max.apply(null, compArray);
}

console.log(getMaxOfArray(compArray));