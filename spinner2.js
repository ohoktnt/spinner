// Spinner 2

// REFRACTOR 1 - 15 lines
// for (let time = 100; time <= 1700; time+=200) {
//   setTimeout(() => {
//     if (time === 100 || time === 900) {
//       process.stdout.write('\r|   ');
//     } else if (time === 300 || time === 1100) {
//       process.stdout.write('\r/   '); 
//     } else if (time === 500 || time === 1300) {
//       process.stdout.write('\r-   ');
//     } else if (time === 700 || time === 1500) {
//       process.stdout.write('\r\\   ');
//     } else {
//       process.stdout.write('\n');
//     }
//   }, time)
// };


// REFRACTOR 2 - 9 lines
let animation = ['\r|   ', '\r/    ', '\r-   ', '\r\\   ', '\r|   ', '\r/    ', '\r-   ', '\r\\   ']
for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(animation[i]);
  }, i * 200)
};
setTimeout(() => {
  process.stdout.write('\n');
}, animation.length * 200);

