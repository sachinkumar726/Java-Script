// let a= 10;
// const b =30;
// var c =30;

// var c =300;

// if(true){
//     let a= 10;
//     const b =20;
//     var c =30;

// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "sachin"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()

// if(true){
//     const username = "hitesh";
//     if(username === "hitesh"){
//         const website = "youtube"
//         console.log(username + username);
//     }

// }

console.log(addone(5));
function addone(num){
    return num +1;

}

console.log(addtwo(5)); // this will not work becouse function eexpressin are not hoisted
const  addtwo = function(num){
    return num +2;

}

