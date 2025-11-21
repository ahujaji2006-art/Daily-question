function countvowels(input){
    let count = 0; 
    const vowels = 'aeiouAEIOU';
    for(let char of input){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;   
}
console.log(countvowels("My name is Khush"));