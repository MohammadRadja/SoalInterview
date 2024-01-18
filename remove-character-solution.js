/**
 * Diberikan 2 buah input yaitu satu karakter string dan kalimat,
 * kalian diminta untuk menghilangkan 1 karakter yang ada di dalam kalimat.
 * contoh:  input => target = "a" , kalimat = "Ini adalah kalimat"
 *          output => "Ini dlh klimt"
 */

let input = "Ini adalah kalimat";
const target = "a";
let output = "";

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char !== target) {
    output += char;
  }
}

console.log("output : ", output);
