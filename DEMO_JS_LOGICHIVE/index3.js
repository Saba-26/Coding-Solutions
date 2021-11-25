// "0009200.000016800.000001000.0000/24"

// output
// ip: 9200.16800.1000.0
// mask: 24

// function removeZero(str)

// let str="0009200.000016800.000001000.0000/24"

let str="092.168.010.00/24";

let mask=str.split("/")[1];
let iparr=str.split("/")[0];
iparr=iparr.split('.');

let ip="";

for(let d in iparr){
    if(iparr[d]!=iparr[iparr.length-1]){
        ip+=parseInt(iparr[d])+"."
    }else{
        ip+=parseInt(iparr[d]);
    }
}
console.log(ip);
console.log(mask);