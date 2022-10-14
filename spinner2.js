process.stdout.write('hello from spinner1.js... \rheyyy\n');

let output = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']

for (let i = 1; i <= 8; i++) {
  setTimeout(() => {
    process.stdout.write(output[i]);
  }, 100 * i);
}
