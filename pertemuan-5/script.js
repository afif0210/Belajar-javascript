//operator unary
let a = 5 ;
//increment = +1
a++ 
console.log(a);

//conditional

let laukPagi = "ayam semur";

if (laukPagi == "ayam semur") {
    console.log("makan pagi dengan ayam semur");
}
else {
    console.log("makan pagi dengan lauk lain")
}

let isAzzamHandsome = true ;
let fakihBerkata = !isAzzamHandsome ;

if (fakihBerkata == true){
    console.log("azzam kurang ganteng")
}
else {
    console.log("azzam itu ganteng")
}

//let inputUser = prompt('masukan ekstrkulikuler pilihan anda :panahan,futsal,taekwondo');
//if (inputUser == 'panahan'){
//    alert('anda memilih ekstrakulikuler panahan')
//}
//else if (inputUser == 'futsal'){
//    alert('anda memilih ekstrakulikuler futsal')
//}
//else if (inputUser == 'taekwondo'){
//    alert('anda memilih ekstrakulikuler taekwondo')
//}
//else {
//    alert('anda tidak memilih ekstrakulikuler')
//}

//let angka = prompt('masukkan angka');

// 3 pernyataan
//if (angka % 2 === 0){
//   alert('angka genap')
//}
//else if (angka & 2 === 1) {
//    alert("angka ganjil")
//}
//else {
//    alert("anda memasukkan string")
//}

//switch buat program switch menggunakan promt

let hari = 1

switch (hari){
    case 1:
        console.log("Hari Senin");
        break;
    case 2:
        console.log("Hari Selasa");
        break;
    case 3:
        console.log("Hari Rabu");
        break;
    default:
        console.log("Hari tidak valid");
}

let makanan = prompt("masukan makanan favorit anda : nasi goreng, seblak, salad")

switch (makanan){
    case "nasi goreng":
        alert("makanan ini tidak sehat")
        break;
    case "seblak":
        alert("makanan ini sehat")
        break;
    case  "salad":-
        alert("makanan ini sehat")
        break;
    default:
        alert("anda tidak memilih makanan di list")
}