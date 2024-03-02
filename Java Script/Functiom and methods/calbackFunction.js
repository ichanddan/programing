// A call back function pas an argument to another function is a callback function
// example
// function myfun(){
//     console.log('Hello World');
// }
// function myfun1(myfun){
//     return myfun;
// }
// myfun1()
let arr = ["crusch", "chandan"];
arr.forEach(function myfun(value) {   // eatch valu and eatch index
  console.log(value.toLocaleUpperCase());
});

// using arrow function 
arr.forEach((value) => {  // eatch valu and eatch index
  console.log(value.toLocaleUpperCase());
});

// with index value and array
arr.forEach((value ,idx, arr) => {  // eatch valu and eatch index
  console.log(value.toLocaleUpperCase(),idx,arr);
});
