function getRandomInt(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function getUniqueValues(min, max, valuesArray) {
  let value = getRandomInt(min, max);
  while (valuesArray.includes(value)) {
    value = getRandomInt(min, max);
  }
  valuesArray.push(value);
  return value;
}

export {getRandomInt, getUniqueValues};
