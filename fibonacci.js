function fibIteration(n) {
  let sequence = [];
  let fib = 0;

  for (let i = 0; i <= n; i++) {
    if (i >= 2) {
      fib = sequence[i - 2] + sequence[i - 1];
      sequence.push(fib);
    } else {
      sequence.push(i);
      fib = i;
    }
  }

  return fib;
}

function fibRec(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibIteration(8));
console.log(fibRec(8));
