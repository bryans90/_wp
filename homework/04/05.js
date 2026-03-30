// 5. Object Access
const car = { make: "Tesla", model: "Model 3", year: 2023 };
function describeCar(c) {
    return `This car is a ${c.year} ${c.make} ${c.model}.`;
}
console.log("Ex 5:", describeCar(car));
// Result: Ex 5: This car is a 2023 Tesla Model 3.
