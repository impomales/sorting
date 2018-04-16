function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return [left, right];
}

function merge(left, right) {
  let res = [],
      leftIdx = 0,
      rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      res.push(left[leftIdx]);
      leftIdx++;
    }
    else {
      res.push(right[rightIdx]);
      rightIdx++;
    }
  }

  for (; leftIdx < left.length; leftIdx++) res.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) res.push(right[rightIdx]);

  return res;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let [left, right] = split(arr);

  return merge(mergeSort(left), mergeSort(right));
}
