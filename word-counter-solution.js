/**
 * Diberikan sebuah string, contoh "Hello World",
 * Hitunglah jumlah kata yang terdapat pada string tersebut.
 * Hello World
 * 012345678910
 */
///
let input = "Hello World dan Hallo Dunia";
let output = 0;

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  if (char === " " || i === input.length - 1) {
    output++;
  }
}

console.log("jumlah kata : ", output);
