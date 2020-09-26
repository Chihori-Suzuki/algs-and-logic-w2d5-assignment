// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  // your code here
  if(num >= 2){
    let judge = 0;
    for(i = 2; i <= num; i++){
      if (num % i === 0){
        judge++;
      }
    }
    if(judge === 1){
      return true;
    }else{
      return false;
    }

  }else if(num < 1){ 
    return false;

  }
}

console.log(isPrime(19));
console.log(isPrime(23));
console.log(isPrime(12));
console.log(isPrime(127));
console.log(isPrime(27));
console.log(isPrime(5));
console.log(isPrime(68));