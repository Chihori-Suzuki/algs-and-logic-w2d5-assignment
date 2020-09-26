// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 

const primeGenerator = function(n) {

  let num = Math.sqrt(n);
  // let firstPrime = 0;
  let list = [];
  let newList = [];
  let primeList =[];
  let findList = [];
  let firstNum = 0;
  for (i = 2; i <= n; i++){
    findList.push(i);
  }

  for(i = 0; primeList[i] >= num; i++){
    firstNum = primeList[i];
    for(j = i; j < findList.length; j++){
      

    }
  }

  // for (i = 0; i < list.length; i++){
  //   for(j = 1; j < list.length; j++){
  //     if (list[j] % list[i] === 0){
  //       newList.splice(j, 1)
  //     }
  //   }
  //   if(list[i] >= num){
  //     return newList;
  //   }
  // }

}

console.log(primeGenerator(17));
console.log(primeGenerator(3));

