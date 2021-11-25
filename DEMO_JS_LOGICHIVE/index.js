// Input: "Welcome to this Javascript!";
// Output : "emocleW ot siht !tpircsavaJ"

// function reverse(str){
//     var arr=str.split(" ");
//     var res=" ";

//     const reverse = str =>[...str].reverse().join(' ');
//     document.write(reverse("Welcome to this Javascript!"))
// }

const str="Hi my name is saba!";
const res = str=>{
    let reverse=' ';

    reverse=str.split(" ").map(word=>{
        return word.split("").reverse().join("");
    }).join(" ");
    return reverse;
}

console.log(res(str));