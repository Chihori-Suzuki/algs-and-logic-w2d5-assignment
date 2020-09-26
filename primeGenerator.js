// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {

  let num = Math.sqrt(n);
  // let firstPrime = 0;
  let primeList =[];
  let findList = [];
  let p = 0;
  for (i = 2; i <= n; i++){
    findList.push(i);
  }

  while(p < num){
    p = findList[0];
    primeList.push(findList[0]);
    for(i = 0; i < findList.length; i++){
      if(findList[i] % p === 0){
        findList.splice(i, 1);
      }
    }
  }
  let ansList = primeList.concat(findList);
  return ansList;

}

console.log(primeGenerator(17));
console.log(primeGenerator(3));
console.log(primeGenerator(30));
console.log(primeGenerator(120)); 
//2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113


