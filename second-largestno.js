let arr = [10, 7, 9, 15, 20, 25];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num != largest) {
        secondLargest = num;
    }
}

console.log("Second Largest Number is: " + secondLargest);
