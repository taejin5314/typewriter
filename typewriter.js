const sentence = "hello there from lighthouse labs";
let index = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 50 * index++); // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  console.log();
}, 50 * index);