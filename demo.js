function prom(num) {
  return new Promise(function (res, rej) {
    if (num % 2) {
      res("promise resolved");
    } else {
      rej("promise rejected");
    }
  });
}

function prom1(num) {
  return new Promise(function (res, rej) {
    if (num % 2) {
      res("promise resolved");
    } else {
      rej("promise rejected");
    }
  });
}
function prom2(num) {
  return new Promise(function (res, rej) {
    if (num % 2) {
      res("promise resolved");
    } else {
      rej("promise rejected");
    }
  });
}

Promise.allSettled([prom(10), prom1(11), prom2(12)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
