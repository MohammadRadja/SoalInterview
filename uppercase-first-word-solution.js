/**
 * Diberikan satu buah input berupa string berisi nama orang.
 * Untuk tiap huruf di awal kata ubahlah menjadi huruf kapital.
 * contoh:  input = "nama saya"
 *          output = "Nama Saya"
 */

let input = "nama saya";
let output = "";

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  if (i === 0 || (i > 0 && input[i - 1] === " ")) {
    output += char.toUpperCase();
  } else {
    output += char;
  }
}

console.log("output : ", output);
