// 8. Find Max
function findMax(nums) {
    let max = nums[0];
    for (let n of nums) {
        if (n > max) max = n;
    }
    return max;
}
console.log("Ex 8:", findMax([1, 5, 2, 9, 3]));
// Result: Ex 8: 9
