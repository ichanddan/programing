// let user=prompt("Enter a number");
let user=10
let arr=[];
for(let i=1; i<=user; i++){
    arr[i-1]=i;
}
console.log(arr);
let arrow=arr.reduce((a,b) => {
    return a + b;
})
console.log('sum of: ',arrow);
let product=arr.reduce((a,b) => {
    return a * b;
})
console.log("Factorial of: ",product);
