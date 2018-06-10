var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(x, y) {
  return [y, ...x];
}

function destructivelyAddElementToBeginningOfArray(x, y) {
  var x = x.unshift(y);
  return x;
}