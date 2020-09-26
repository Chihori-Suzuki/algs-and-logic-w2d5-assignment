// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  // your code here
  let i = a;
  while(i % a !== 0 || i % b !== 0) {
    i++;
  }
  return i;
}

console.log(lcm(3, 4));
console.log(lcm(12, 9));
console.log(lcm(5, 8));
