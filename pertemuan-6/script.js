console.log("hello world 1");
console.log("hello world 2");
console.log("hello world 3");
console.log("hello world 4");
console.log("hello world 5");

//looping

//for

for (let a = 1; a <= 100; a++) {
    console.log("hello world! " + a);
}

//mobil grab 1 - 10 dalam keadaan baik

for (let a = 1; a <= 10; a++) {
    if (a % 9 == 0) {
        console.log("mobil " + a + " dalam keadaan di bengkel");
        continue;
    }
    else if (a & 3 == 0) {
        console.log("mobil " + a + " dalam keadaan rusak");
        continue;
    }
    console.log("mobil " + a + " dalam keadaan baik");
}


//while
let bus = 1;

while (bus <= 10) {
   if (bus == 7){
    console.log('bus' + bus + " dalam keadaan rusak");
   }
   else {
    console.log('bus' + bus + " dalam keadaan baik");
   } 
   bus++
}

let kapal = 1;
do {
    console.log("kapal " + kapal + " dalam keadaan baik");
    kapal++;

}
while (kapal <= 10) 
    
