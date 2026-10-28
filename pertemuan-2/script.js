// string

let myname = "jum'at";
let a = 5 ;
let b = 6 ;

let c = a * b ;
console.log(typeof(c))
console.log('nama saya ' + myname + ' dan alamat saya di Jakarta');
console.log(a + b);
console.log(myname);




const teks = 'baris pertama\nbaris kedua';
const tabulasi = 'kolom 1\tkolom 2\tkolom 3';
const kutipantunggal = 'hari ini jum\'at';
const kutipanganda = 'dia berkata, "Halo!"'
const backslash = 'karakter ini di sebut backslash \\';

console.log(teks);
console.log(tabulasi);
console.log(kutipantunggal);
console.log(kutipanganda);
console.log(backslash);

// number

let z = 10*10;
console.log(z);

//boolean
let istrue = true;
console.log(typeof(istrue));

//null & undefined
let varOne = null ;
console.log(typeof(varOne));

let myUndefined;
console.log(typeof(myUndefined));

//array
const array = ['spagetty', 'ayam geprek', 'telor dadar'];
array.push('nasi goreng')
array.push('nasi uduk')
array.push(1)
array.pop(1)
array.shift('spagetty')
array.unshift('spagetty')
array.splice(2, 3, 'sate ayam')
array.join('spagetty, ayam geprek, telor dadar')

console.log(array);

//object = > variable = {key:value}

let myData = {
    name : 'sandi',
    addres : "jl. mangga 2",
    age : 16,
    food : ['ayam geprek', 'spagetty', 'telor dadar']
}
myData.hodi = 'mengaji';
console.log(myData);



// tuliskan variable dengan 7 data disimpan di array dan tampilkan data tersebut seolah olah
// cerita yang berkaitan dari data itu menggunakan document.write()

// Menyimpan 7 data di dalam array

// lagi belajar nan
console.log(5 * undefined);
let angka = prompt("masukan angka 1 - 10");
alert("angka anda adalah" + typeof(angka));
