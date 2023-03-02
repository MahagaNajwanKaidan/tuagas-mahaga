//4. perulangan foreach 
//PERULANGAN FOREACH biasa digunakan untuk mencetak item di dalam array.
//perulangan ini termasuk dalam perulangan counted loop, karena jumlah perulangan akan ditentukan oleh panjang dari array.
//ada 2 caraa untuk menggunakan perulangan foreach :
//1. meggunakan for dengan operator in
//2. meggunakan method forEach() 

//contoh 
// let bahasa = ["javascript", "java","objective","python"];
// for(let i = 0; i < bahasa.length; i++);{
//     document.write(`${i + 1}.${bahasa[i]}`)
// }

// let bahasaPemrogaman = ["javascript", "java","objective","python"];
// for(let i in bahasaPemrogaman){
//     document.write(`${i}.${bahasaPemrogaman[i]}<br/>`);
// }

//contoh perulangan forEach();

//  let hari= ["senin" , "selasa" , "rabu" , "kamis" , "jumat" , "sabtu" , "minggu"]; //ini array

//  hari.forEach(function (hari) {
//  document.write(`<h1>${hari}</h1>`);

// });

// hari.forEach((hari) => {
//     document.write(`<h1>${hari}</h1>`)
// });

//5. perulangan dengan method repeat()
// perulangan dengan meggunakan fungsi repeat()termasuk dalam perulangan counted loop
//fungsi ini khusus digunakan untuk mengulang sebuah teks(string);

// for ( let i = 0; i < 10; i++){
//     document.write(`ulangi kalimat ini! <br>`);
// }
// document.write(`Ulangi kalimat ini! <br>`.repeat(10));

// 6. perulangan nested (BERSARANG)
// nested loop adalah perulangan bersarang(perulangan di dalam perulangan)

// contoh
// for (let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         document.write(`<p>perulangan ke - ${i},${j} </p>`)
//     }
// }

let ulang = confirm("apakah anda ingin mengulang?");
let counter = 0;

while (ulang) {
    counter++;
    let bintang = "*".repeat(counter) + "<br>";
    document.write(counter + " : " + bintang);
    ulang = confirm("apakah anda ingin mengulang?");
}