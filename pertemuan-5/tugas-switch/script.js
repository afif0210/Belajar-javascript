

let strategi = prompt(
    "Pilih strategi futsal:\n1. Counter Attack\n2. Possession\n3. High Press"
);

switch (strategi) {
    case "1":
        alert("Counter Attack: Manfaatkan kecepatan untuk serangan balik!");
        break;

    case "2":
        alert("Possession: Kuasai bola dan cari ruang!");
        break;

    case "3":
        alert("High Press: Tekan lawan sejak awal!");
        break;

    default:
        alert("Strategi tidak tersedia!");
}
