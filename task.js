//Write a program to print a square star pattern for n = 5.

let n=5;
let out='';
for(let i=1;i<=n;i++){
    // for(let k=1;k<=n;k++){
    //     out+='* '
    // }
    // out+='\n'
    console.log('* * * * *');
    
}
// console.log(out);
//Write a program to print a right triangle star pattern.

let res='';
for(let i=1;i<=n;i++){
    for(let k=1;k<=i;k++){
        res+='*'
    }
    res+='\n'
}
console.log(res);

//Write a program to print a reverse triangle star pattern.

let res1='';
for(let i=n;i>=1;i--){
    for(let j=1;j<=i;j++){
        res1+='* '
    }
    res1+='\n'
}
console.log(res1);

//Write a program to print a number triangle pattern.:-


let res2='';

for(let i=1;i<=n;i++){
    for(let k=1;k<=i;k++){
        res2+=k
    }
    res2+='\n'
}
console.log(res2);



let res5='';

for(let i=1;i<=n;i++){
    let re=i>3
    for(let k=1;k=re;k++){
        res5+='*'
    }
    res5+='\n'
}
console.log(res5);



// *
// **
// ***
// **
// *


let res6='';
let n1=3

for(let i=1;i<=(n1*2)-1;i++){
    let rev=i<=n1?i:(n1*2)-i;
    for(let k=1;k<=rev;k++){
        res6+='*'
    }
    res6+='\n'
}
console.log(res6);



//Write a program to print a pattern where the row number is repeated.:-

let res3='';

for(let i=1;i<=n;i++){
    for(let k=1;k<=i;k++){
        res3+=i
    }
    res3+='\n'
}
console.log(res3);
/*1
21
321
4321
54321*/

let res4='';

for(let i=1;i<=n;i++){
    for(let k=i;k>=1;k--){
          res4+=k
    }
    res4+='\n'
}
console.log(res4);
