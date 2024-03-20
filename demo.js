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

