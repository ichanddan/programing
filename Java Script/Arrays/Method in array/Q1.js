// Create array to store company=['Bloomberg','microsoft','uber', 'google', 'ibm', 'netflix']
// a) Remove the first company from array 
// b) Remove uber & add ola in its place
// c) Add Amazon at end

let c=['Bloomberg','microsoft','uber', 'google', 'ibm', 'netflix'];
console.log(c);
c.shift()
c.splice(1,1,'ola')
c.push('amazon')
console.log(c);