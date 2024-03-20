function check(arr, n) {
  let ele = Infinity,
    index = 0;
  arr.forEach((i, j) => {
    if (i == n) {
      console.log(true);
    } else {
      let temp = ele;
      ele = Math.min(ele, i > n ? i - n : n - i);
      if (temp != ele) {
        index = j;
      }
    }
  });
  console.log(index);
}

function chhotaBheem(n, arr) {
  let i = 1;
  arr.sort((a, b) => a - b);
  while (true) {
    let ind;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        ind = j;
        break;
      } else if (arr[j] > i) {
        ind = j;
        break;
      }
    }
    if (ind >= 0) {
      delete arr[ind];
      i++;
    } else {
      return i - 1;
    }
  }
}
console.log(
  chhotaBheem(
    32,
    [
      4, 5, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 9, 9, 10, 12, 12, 12, 12, 12, 13,
      13, 13, 13, 13, 15, 16, 17, 17, 20, 21, 22, 24, 24, 25, 25, 25, 26, 26,
      26, 27, 27, 28, 29, 30, 31, 31, 32, 32, 33, 33, 34, 35, 37, 37, 37, 38,
      38, 39, 39, 39, 40, 40, 41, 41, 41, 43, 44,
    ]
  )
);
console.log(chhotaBheem(4, [3, 1, 4, 1, 5]));
console.log(chhotaBheem(3, [1, 1, 1]));
