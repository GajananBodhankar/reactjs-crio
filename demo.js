function quick(start, end, arr) {
  if (start < end) {
    let j = partition(start, end, arr);
    quick(start, j - 1, arr);
    quick(j + 1, end, arr);
  }
  return arr;
}

function partition(start, end, arr) {
  let j = start - 1,
    pivot = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      j++;
      tem = arr[i];
      arr[i] = arr[j];
      arr[j] = tem;
    }
  }
  temp = arr[j + 1];
  arr[j + 1] = arr[end];
  arr[end] = temp;
  return j + 1;
}
console.log(quick(0, 4, [5, 4, 3, 2, 1]));
