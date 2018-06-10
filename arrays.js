var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(x, y) {
  return [y, ...x];
}

function destructivelyAddElementToBeginningOfArray(x, y) {
  [x].unshift(y);
  return x
}

