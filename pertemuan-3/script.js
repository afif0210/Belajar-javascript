
// konversi tipe data
let angka = 100;
let konversiAngka = String(angka);


console.log(konversiAngka + konversiAngka);
console.log(typeof konversiAngka)

let tahun = '2026';
let konversiTahun = Number(tahun);

console.log (konversiTahun + 4)

// nilai falsy
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// nilai truthy
console.log(Boolean("reza"));
console.log(Boolean(1));
console.log(Boolean(true));

// operator aritmatika
let a = 10;
let b = 5;

//pertambahan
console.log(a + b);

// pengurangan
console.log(a - b);

// perkalian
console.log(a * b);
// modulus
console.log(a % b);
// pembagian
console.log(a / b);

//operator penugasan
let x = 10;

console.log("nilai x awal : " + x);

x += 10;
console.log("nilai x setelah penugasan: " + x);

x-= 5;
console.log("nilai x setelah penugasan: " + x);

x *= 2;
console.log("nilai x setelah penugasan: " + x);

x /= 4;
console.log("nilai x setelah penugasan: " + x);

x %= 3;
console.log("nilai x setelah penugasan: " + x);

// operator perbandingan
let c = 10;
let d = 5;
let e = '10';

//lebih dari
console.log("lebih dari > : " + (c > d));//true
//lebih dari sama dengan
console.log("lebih dari sama dengan >= : " + (c >= d));

//==operator
console.log("sama dengan == : " + (c == e));//true
//===operator
console.log("sama dengan === : " + (c === e));