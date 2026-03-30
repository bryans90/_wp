// 4. Array Sum
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Ex 4:", sumArray([10, 20, 30]));
// Result: Ex 4: 60
