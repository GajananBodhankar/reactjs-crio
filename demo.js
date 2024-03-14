function merge(start, end, arr) {
  let mid = Math.floor((start + end) / 2);
  if (start < end) {
    merge(start, mid, arr);
    merge(mid + 1, end, arr);
    mergeSort(start, mid, end, arr);
  }
  console.log(arr);
}

function mergeSort(start, mid, end, arr) {
  let low = start,
    high = end,
    i = start,
    secondStart = mid + 1,
    temp = [];
  while (low <= mid && secondStart <= high) {
    if (arr[low] <= arr[secondStart]) {
      temp[i] = arr[low];
      low++;
    } else if (arr[secondStart] <= arr[low]) {
      temp[i] = arr[secondStart];
      secondStart++;
    }
    i++;
  }
  if (low > mid) {
    for (let k = secondStart; k <= high; k++) {
      temp[i] = arr[k];
      i++;
    }
  }
  if (secondStart > high) {
    for (let k = low; k <= mid; k++) {
      temp[i] = arr[k];
      i++;
    }
  }
  for (let k = start; k <= end; k++) {
    arr[k] = temp[k];
  }
}

merge(0, 4, [5, 4, 3, 2, 1]);
