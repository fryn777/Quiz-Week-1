//soal 10
const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
// Find where the 'walrus' item is
const walrus = animal.indexOf("walrus")

// Join the portion before 'walrus' to the portion after 'walrus'
const animalsSliced = [...animal.slice(0, walrus), ...animal.slice(walrus + 1)]

// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

console.log(animalsSliced);