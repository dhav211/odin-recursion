function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const middle = Math.floor(arr.length * 0.5);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, arr.length));
    let sorted = [];

    while (left.length > 0 && right.length > 0) {
      const leftValue = left.shift();
      const rightValue = right.shift();

      if (leftValue < rightValue) {
        sorted.push(leftValue);
        right.unshift(rightValue);
      } else if (leftValue > rightValue) {
        sorted.push(rightValue);
        left.unshift(leftValue);
      } else if (leftValue == rightValue) {
        sorted.push(leftValue, rightValue);
      }
    }

    if (left.length > 0) {
      sorted = sorted.concat(left);
    } else if (right.length > 0) {
      sorted = sorted.concat(right);
    }

    return sorted;
  }
}

console.log(mergeSort([]));
console.log(mergeSort([3]));
console.log(mergeSort([3, 9, 5, 0, 3, 5]));
console.log(mergeSort([21, 43, 65, 765, 32, 22, 98, 837, 1092, 3, 57, 39]));
