/**
 * Tampilkan angka 1 sampai 20,
 * jika angka tersebut kelipatan 3, maka ganti angka tersebut dengan kata “Fizz”,
 * jika angka tersebut kelipatan 5, maka ganti angka tersebut dengan kata “Buzz”,
 * dan jika angka tersebut kelipatan 3, dan 5 maka ganti dengan kata “FizzBuzz”.
 */

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
