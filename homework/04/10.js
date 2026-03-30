// 10. Accumulator
function accumulate() {
    let total = 0;
    let current = 1;
    while (total <= 50) {
        total += current;
        current++;
    }
    return total;
}
console.log("Ex 10:", accumulate());
// Result: Ex 10: 55
