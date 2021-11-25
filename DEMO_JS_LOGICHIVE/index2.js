// [1,4,4,2,4,1,2,4,1]


// Output:
// [1,1,1] = 3
// [4,4,4,4] = 16
// [2,2] = 4
// 23
//     const arr=[1,4,4,2,4,1,2,4,1];
//     arr.sort();
//     let sum=0;

//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
// console.log(sum);

// const count={};
// const arr=[1,4,4,2,4,1,2,4,1];

// arr.foreach(function(x){
//     count[x]=(count[x]||0)+1;
// });

// console.log(count);


let arr=[1,4,4,2,4,1,2,4,1,5,9,8,8,];
let ar=[];
let sum=0;
let only=new Set([...arr]);

for(let key of only){
    let a=[];
    for(let j=0;j<arr.length;j++){
        if(arr[j]==key){
            a.push(arr[j]);
        }
    }
    ar.push(a);
}

for(let i=0;i<ar.length;i++){
        let s=ar[i][0]*ar[i].length;
        console.log("["+ar[i]+"]"+"="+s);
        sum+=s;
}
console.log(sum);