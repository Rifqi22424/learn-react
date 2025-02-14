export function double(x) {
  let result = x * 2;
  console.log(result);

  return result;
}

let count = 0;
export function increment(x) {
  count += x;
  console.log(count);
  return count;
}
