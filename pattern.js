/*// for(let i=0;i<=10;i++){
//     console.log("*");   
// }

// for(let i=0;i<=10;i++){
//     console.log(i);
    
// }
// console.log("............");

// for(let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(1);
        
//     }
//     else {
//         console.log(0);
        
//     } 
// }
// console.log("simple way");

// let out=''
// for(let i=0;i<=10;i++){
//     out+=i%2
    
// }
// console.log(out);

// let result=''
// for(let i=0;i<=10;i++){
//     for(let j=0;j<=10;j++){
//         result+='* '
        
//     }
//     result+='\n'
// }
// console.log(result);



// let result1=''
// for(let i=0;i<=10;i++){
//     for(let j=0;j<=10;j++){
//         result1+=i
       
//     }
//     result1+='\n'
// }
// console.log(result1);


// let result3='';

// for(let i=0;i<=10;i++){
//     for(let j=0;j<=i;j++){
//         result3+='*  '
//     }
//     result3+='\n'
// }
// console.log(result3);

// let result4='';
// for(let i=1;i<=10;i++){
//     for(let j=0;j<i;j++){
//         result4+= (i%2==0?1:0)+''
//     }
//     result4+='\n'
// }
// console.log(result4);


// // let result5='';
// // for(let i=1;i<=10;i++){
// //     for(let j=1;j<=i*2;j++){
// //         result5+="* ";
// //     }
// //     result5+='\n'
// // }
// // console.log(result5);
// let result5 = '';

// for(let i = 1; i <= 10; i += 2){
//     for(let j = 1; j <= i; j++){
//         result5 += "* ";
//     }
//     result5 += '\n';
// }

// console.log(result5);

// let result6='';
// for(let i=0;i<=10;i++){
//     let temp=(i*2)-1
//     for(let j=0;j<temp;j++){
//         result6+='*'
        
//     }
//     result6+='\n'
// }
// console.log(result6);

// console.log("reverse");


// let result7='';

// for(let i=10;i>=0;i--){
//     for(let j=0;j<=i;j++){
//         result7+="*"
//     }
//     result7+= '\n'
// }
// console.log(result7);

// // ist one row printed and then column printing 


// let output2=''

// for(let i=10;i>=0;i--){
//     for(let j=0;j<i;j++){
//         output2+=' '
//     }
//     for(let k=i;k<=10;k++){
//         output2+='*'
//     }
//     output2+='\n'
// }
// console.log(output2);
// let ans=''

// for(let i=0;i<=4;i++){
//     for(let k=1;k<=i;k++){
//         ans+='*'

//     }
//     ans+='\n'
// }
// console.log(ans);


// new patern printing:-


// tricks:-


//no of line = no fo rows
// ourter loop time

// no of colum in innr loop

// 

function pattern(n){
    let output=''
    for(let i=0;i<=n;i++){
        for(let k=0;k<=n;k++){
            output+='* '
        }
    output+='\n'
    }
    return output

}
 let result=pattern(3)
 console.log(result);


  

 function patternA(n){
    let output=''
    for(let i=1;i<=n;i++){
        for(let k=1;k<=n;k++){
            output+= i
        }
    output+='\n'
    }
    return output

}
 let resultA=patternA(4)
 console.log(resultA);
 











 function pattern1(n){
    let output1='';
    for(let i=1;i<=n;i++){
        for(let k=1;k<=i;k++){
            output1+='*'
        }
        output1+='\n'
    }
    return output1
 }
 console.log(pattern1(10));
 

 function patternC(num){
    let ans='';
    for(let i=1;i<=num;i++){
        for(let k=1;k<=i;k++){
            ans+=k
        }
        ans+='\n'
    }
    return ans

 }
 console.log(patternC(5));
 
console.log("----------------");



 function patternD(num){
    let ans='';
    for(let i=1;i<=num;i++){
        for(let k=1;k<=i;k++){
            if(k%2==0){
                ans+=0
            }
            else{
                ans+=1
            }
        }
        ans+='\n'
    }
    return ans

 }
 console.log(patternD(5));

*/


// outer five and inner :-

function num(n){
    let output=''
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            output+="* " 
        }
        output+='\n'
        
    }
    return output;
}
console.log(num(5));
//

function num1(n){
    let output=' '
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            output+=i
        }
        output+='\n'
        
    }
    return output;
}
console.log(num1(5));

// ourt loop and column increase :-

function nums(n){
    let output1='';
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            output1+='*';
        }
        output1+='\n'
    }
    return output1
}
console.log(nums(5));

//

function nums1(n){
    let output1='';
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            output1+=j;
        }
        output1+='\n'
    }
    return output1
}
console.log(nums1(5));

// print 1 0 1 0 1:-

function num2(n){
    let output2='';
    let printValue=1;
    for(let i=1;i<=n;i++){
        printValue=i%2==0?0:1
        for(let j=1;j<=i;j++){
            output2+=printValue
            printValue=printValue===1?0:1
            
        }
        output2+='\n'
    }
    return output2
}
console.log(num2(5));



//123456
function num3(n){
    let output='';
    let printV=1
    for(let i=0;i<=n;i++){
        for(let j=0;j<=i;j++){
            output+=printV++
        }
        output+='\n'
    }
    return output

}
console.log(num3(5));
