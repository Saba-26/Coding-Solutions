// ['elephant', "cat", 'dog', 'owl', 'unicorn','alligator']

// Filter the names based on vowels and Convert first letter into uppercase, by using map and filter function

const arr = ["eagle","tiger","elephant", "cat", "dog", "owl", "unicorn", "alligator"];
let str = "aeiou";
const newarr = arr
  .filter((i) => str.includes(i[0]))
  .map((animal) => animal.charAt(0).toUpperCase() + animal.slice(1));
const array=arr.map(a => a.charAt(0).toUpperCase()+a.slice(1));
newarr.sort();
console.log(array);
console.log(newarr);
