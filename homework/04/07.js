// 7. JSON Parsing
const jsonStr = '{"name": "Alice", "age": 25, "city": "New York"}';
function getCity(json) {
    const obj = JSON.parse(json);
    return obj.city;
}
console.log("Ex 7:", getCity(jsonStr));
// Result: Ex 7: New York
