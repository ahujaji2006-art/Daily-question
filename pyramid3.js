const n = 5; 

for (let i = 1; i <= n; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a += j;
  }
  console.log(a);
}

for (let i = n - 1; i >= 1; i--) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a += j;
  }
  console.log(a);
}
