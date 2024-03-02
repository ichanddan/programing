let arr=[1,2,3,4];
let Newarr=arr.reduce((reult,value)=>{
    return reult+value;
})
console.log(arr);
console.log(Newarr);


// find largest number of array 

let arr1=[-1,1,2,3,4,657,8787,566456,3423,242478676,];
let Newar=arr1.reduce((reult,value) => {
    return reult > value ? reult : value;
})
console.log(Newar);