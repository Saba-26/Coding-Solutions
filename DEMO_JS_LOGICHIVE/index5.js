// flat the array without using flat function
// input=[1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]]
// output=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// let arr="[1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]]";

// let farr=arr.reduce((val,curVal)=>{
//     return val.concat(curVal)
// }[]);

const arr=[1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]];
const newarr=[];
for(let i=0;i<arr.length;i++){
       if(typeof(arr[i])==="object"){
           newarr.push(...arr[i]);
       }else{
           newarr.push(arr[i]);
       }
    
}

console.log(newarr);

// function flat(array){
//     let flatarray=[];
//     for(let i=0;i<array.length;i++){
//         const current=array[i];
//         if(!Array.isArray(current)){
//             flatarray.push(current);
//             continue;
//         }  
//         for(let j=0;j<current.length;j++){
//             flatarray.push(current[j])
//         }  
//     }
//     return flatarray;  
// }

// console.log(flat([1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]]));

var flattenArry=function(data){
    return data.reduce(function iter(r,a){
        if(a===null){
            return r;
        }

        if(Array.isArray(a)){
            return a.reduce(iter,r);
        }
        if(typeof a === 'object'){
            return Object.keys(a).map(k=>a[k].reduce(iter,r));
        }
        return r.concat(a);
    },[]);

}
var data=[1,2,[3, 4,[5, 6],7],8,[9,10],[11,12,[13,14]]];
console.log(flattenArry(data));