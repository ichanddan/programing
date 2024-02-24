let marks=[56,76,98,96,56,76];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);