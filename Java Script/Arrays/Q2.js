// for given array with prices of 5 items [250,645,300,900,50] all items have a 10% descount and store in valu in array after 10 % descount
let prices=[250,645,300,900,50];
// prices[2]=20;
let idx=0;
for(let value of prices){
    console.log(`value at index ${idx}=${value}`);
    let offer = value/10;
    prices[idx]= prices[idx] - offer;
    console.log(`value after offer =${prices[idx]}`);
    idx++;
}
console.log(prices);

// the below code