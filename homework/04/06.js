// 6. Filtering
function getAdults(ages) {
    let adults = [];
    for (let age of ages) {
        if (age >= 18) adults.push(age);
    }
    return adults;
}
console.log("Ex 6:", getAdults([12, 21, 16, 45]));
// Result: Ex 6: [21, 45]
