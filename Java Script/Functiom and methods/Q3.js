// create name of array marks between 50 to 100 and filter above of 90+ marks

let marks =[50,78,80,56,87,90,93,57,98,99,34,76,54,87,96,92]
let mark=marks.filter((val)=>{
    return val>90;
})
console.log(mark)