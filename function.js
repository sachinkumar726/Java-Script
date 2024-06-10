//function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// } 

// function addTwoNumbers(number1 , number2){

//     let result = number1 +number2;

//     return result;
// }

// const result = addTwoNumbers(3, 6);

// console.log("Result:", result);


// function loginUserMessage(username = "sam"){
//     if(!username ){
//         console.log("Plese enter a usernname")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Sachin"));

// function calculateCardPrice( val1, val2, ...num1){ // ... is a rest operator that return the value in array
//     // val1, val2 store the first two numbers
//     return num1
// }

// console.log(calculateCardPrice(100, 400, 500,300));

const user ={
    username : "Sachin",
    prices: 1000
}

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

// }

// // handleObject(user);
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){

    return getArray[1]
} 
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([440, 400,500]));