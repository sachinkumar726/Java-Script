//Arrays

const myArr = [0, 1, 2, 3,4, 5];

const Heros = ["Sachin", "virat", "Rohit"]
console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); 

// slice, plice

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3);
// console.log("C", myArr)
// console.log(myn2);
//********************************* */
const marvel_heros = ["thor", "Heros",'spiderman'];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

// // console.log(marvel_heros);
// const newArr = marvel_heros.concat(dc_heros);
// // concat krne ke liye ek naya array banana pdta hai tab concat kam krta hai
// console.log(newArr);

const all_newheros = [...marvel_heros, ...dc_heros];// we can use spread for merging two array i.e denoted by ...
// console.log(all_newheros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin"));
console.log(Array.from({name: "Sachin"})); // can't directly convert // intersting

let score1 = 100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3));

