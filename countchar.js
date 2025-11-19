let fruit ="banana";
let charToCount = "a";
let count = 0;

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === charToCount) {
        count++;
    }
}

console.log(`${charToCount} in ${fruit} = ${count}`);