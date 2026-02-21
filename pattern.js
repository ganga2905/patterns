for(let i=0;i<=10;i++){
    console.log("*");   
}

for(let i=0;i<=10;i++){
    console.log(i);
    
}
console.log("............");

for(let i=2;i<=10;i++){
    if(i%2==0){
        console.log(1);
        
    }
    else {
        console.log(0);
        
    } 
}
console.log("simple way");

let out=''
for(let i=0;i<=10;i++){
    out+=i%2
    
}
console.log(out);

let result=''
for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        result+='* '
        
    }
    result+='\n'
}
console.log(result);



let result1=''
for(let i=0;i<=10;i++){
    for(let j=0;j<=10;j++){
        result1+=i
       
    }
    result1+='\n'
}
console.log(result1);


let result3='';

for(let i=0;i<=10;i++){
    for(let j=0;j<=i;j++){
        result3+='*  '
    }
    result3+='\n'
}
console.log(result3);

let result4='';
for(let i=1;i<=10;i++){
    for(let j=0;j<i;j++){
        result4+= (i%2==0?1:0)+''
    }
    result4+='\n'
}
console.log(result4);


// let result5='';
// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i*2;j++){
//         result5+="* ";
//     }
//     result5+='\n'
// }
// console.log(result5);
let result5 = '';

for(let i = 1; i <= 10; i += 2){
    for(let j = 1; j <= i; j++){
        result5 += "* ";
    }
    result5 += '\n';
}

console.log(result5);

let result6='';
for(let i=0;i<=10;i++){
    let temp=(i*2)-1
    for(let j=0;j<temp;j++){
        result6+='*'
        
    }
    result6+='\n'
}
console.log(result6);
