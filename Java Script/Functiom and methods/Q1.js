// function myFunction(str) {
//   let count = 0;
//   for (const char of str) {
//     console.log(char);
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//         count++;

//     }
//     return count;
//   }
//   console.log(count);
// }
// myFunction("this is a eliphant");

// using arrow function
const vovle = (str1) => {
  let count1 = 0;
  for (const char1 of str1) {
    console.log(char1);
    if (
      char1 === "a" ||
      char1 === "e" ||
      char1 === "i" ||
      char1 === "o" ||
      char1 === "u"
    ) {
      count1++;
    }
  }
  console.log(count1);
};
vovle("this is a eliphant");
