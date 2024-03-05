function memoised(fn) {
  let cache = {};
  return function (val) {
    if (cache[val]) {
      return cache[val];
    } else {
      cache[val] = fn(val);
      return cache[val];
    }
  };
}

function CheckPrime(val) {
  console.log("Executing primefn");
  for (let i = 2; i < Math.sqrt(val); i++) {
    if (val % i == 0) {
      return "Not prime";
    }
  }
  return "Prime";
}

let result = memoised(CheckPrime);
console.log(result(10));
console.log(result(10));
