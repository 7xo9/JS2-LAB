
for (let i = 0; i < 10; i++){
    if (i % 2 == 0){
        console.log(`The Number ${i} is even`);
        
    }else {
        console.log("");
        continue;
    }
}

console.log("=============LAB START=============");
        // LAB 2

for (let i = -25; i < 0; i++){
    if (i % 2 == 0){
        console.log(`The Number ${i} is Even`);
    }
}

console.log("========== squares of numbers =========");



for (let w = 1; w < 11; w++){
    console.log(w*w);
}

console.log("========== ODD Numbers =========");


for (let o = 1; o<11; o++){
    if (o % 2 == 0){
       continue;
    }else{
        console.log(`The out put is odd and it's ${o}`);
    }
}

// English Part

console.log("========= Fibonacci sequence ===============");

let n1 = 0, n2 = 1, next;
const number = 10;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}

// Last Point

let z = 1;
let y = 2;
let s = 3;

// 1
console.log("============= 1 =================");
for (let i = 1; i <11; i++){
    console.log(`${z}x${i} = ${i*z}`); 
     
}
console.log("============= 2 =================");
for(let i = 1; i < 11; i++){
    console.log(`${y}x${i} = ${i*y}`);
}
console.log("============= 3 =================");

for(let i = 1; i < 11; i++){
    console.log(`${s}x${i} = ${i*s}`);    
}



