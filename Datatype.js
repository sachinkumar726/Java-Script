"use strict"// treat all js code as newer version

// alert(3+3) // we are using nodejs , not browser

// let name = "hitesh"
// let age = 18
// let isLoggedIn = false

// number => 2 to power 53
// bigint
// boolean => true/false
// null standalone value let state = null
// undefine for ex let name;
// symbol => for uniqness

// object 

// console.log(typeof "Sachin");

// console.log(typeof null) // null is a object


//***************************************************************************** */
// primitive 
// 7 types : String , Number , Boolean, null, undefine, Symbol, BigInt

const score =100;

const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//ceck
console.log(id === anotherId)

const bigNumber = 865432135412n;


// Reference (non primitive)
// Array, Objects, Functions

const heros = ["sachin", "Rohit", "virat"];// array

let myObj = {
    name: "sachin",
    age: 22
}

const myfunction = function (){
    console.log("hello world");
}


