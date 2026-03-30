// 9. Book Titles
const library = [
    { title: "The Hobbit", author: "Tolkien" },
    { title: "1984", author: "Orwell" }
];
function getTitles(books) {
    return books.map(b => b.title);
}
console.log("Ex 9:", getTitles(library));
// Result: Ex 9: ["The Hobbit", "1984"]
