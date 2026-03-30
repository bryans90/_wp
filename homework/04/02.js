// 2. For Loop
function countdown() {
  let result = [];
  for (let i = 10; i >= 1; i--) {
    result.push(i);
  }
  return result.join(", ");
}
