function squareNum(number) {
  var array = [];
  // Split number into an array of numbers that make it up
  array = String(number).split('');

  for (let i = 0; i < array.length; i++) {
    // Take each number in that array and square it (in place)
    // Also can be done with forEach depending on what es version you're targetting
    array[i] = Math.pow(array[i], 2);
  }

  // combine and return the elements of the array
  return Number(array.join(''));
}

console.log(squareNum(999));
squareNum(983);
