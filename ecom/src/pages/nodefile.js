console.log('A');

setTimeout(() => console.log('B - timeout'), 0);

Promise.resolve().then(() => {
  console.log('C - promise 1');
  process.nextTick(() => console.log('D - nextTick from inside C'));
});

process.nextTick(() => console.log('E - nextTick 1'));

Promise.resolve().then(() => console.log('F - promise 2'));

console.log('G');