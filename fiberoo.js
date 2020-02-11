function fib() {
  const list = [];
  let num = 0;
  let a = 0;
  let b = 1;
  for (let i = 0; i < 50; i++) {
    list.push(a);
    num = a + b;
    a = b;
    b = num;
  }
  return list;
}

console.log(fib());


function numsToStrings(array) {
  return _.map(array, (iter) => iter.toString());
}


console.log(numsToStrings(fib()));


function numEvenNums(array) {
  const even = _.filter(array, (iter) => iter % 2 === 0);
  return even.length;
}

console.log(numEvenNums(fib()));
