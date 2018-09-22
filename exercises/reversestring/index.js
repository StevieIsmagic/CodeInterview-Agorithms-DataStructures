// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
  turn string into an array
  call reverse method on the array
  join the array back into a string
  return the result
  */ 
  let arr = str.split('');
  arr.reverse();
 return arr.join('');
}

module.exports = reverse;
