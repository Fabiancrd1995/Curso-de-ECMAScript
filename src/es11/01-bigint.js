const aBigNumber = 484654164161316546541653n;
const anotherBigNumber = BigInt(484654164161316546541653);

console.log(aBigNumber);
console.log(anotherBigNumber);


//contador de dijito

function contador(number) { 
    return number.toString().length; 
}

console.log(contador(aBigNumber));