let arr =[10, 7, 9, 15, 20, 25, 25];

let empty =[]

for (let i=0; i< arr.length; i++){
    let num = arr[i];
    let isDuplicate = false;

    for (let j=0; j< empty.length; j++){
        if (num === empty[j]){
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate){
        empty.push(num);
    }
}
console.log(empty);