function categorizeNumber(input) {
    // Memeriksa apakah input adalah angka
    if (typeof input !== 'number') {
        throw new Error('Input harus berupa bilangan bulat');
    }

    // Memeriksa kategori bilangan
    if (input === 0) return "Nol";
    if (input < 0) return "Negatif";
    if (isPrime(input)) return "Prima";
    if (input % 2 === 0) return "Genap";
    
    return "Ganjil"; // Jika tidak genap, berarti ganjil
}

// Fungsi untuk memeriksa bilangan prima
function isPrime(n) {
    if (n <= 1) return false; // Bilangan prima harus lebih dari 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // Jika ada faktor, bukan prima
    }
    return true; // Jika tidak ada faktor, berarti prima
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
