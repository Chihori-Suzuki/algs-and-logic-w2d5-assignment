// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {
  // your code here
  let div = 0;
  if(a > b){
    for(i = 2; i <= b; i++){
      if (a % i === 0 && b % i === 0){
        div = i;
      }
    }
  }else if (a < b){
    for(i = 2; i <= a; i++){
      if (a % i === 0 && b % i === 0){
        div = i;
      }
    }
  }else if (a === b){
    div = a;
  }
  return div;

}

console.log(gcd(12, 8));
console.log(gcd(42, 28));
console.log(gcd(25, 20));
console.log(gcd(20, 25));
console.log(gcd(42, 28));