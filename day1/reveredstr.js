let str = "hello"
let reveredStr = ""

for (let i = str.length - 1; i >= 0; i--) {
    reveredStr += str[i];
}

console.log(reveredStr);