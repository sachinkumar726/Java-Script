const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc +currval
// },0)

// const myTotal = myNums.reduce((acc, curr)=>{
//     return acc+curr;
// },0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js courese",
        price: 2999,

    },

    {
        itemName:"react courese",
        price: 2999
        
    },

    {
        itemName:"android courese",
        price: 2999,
        
    }
]

const PrizeToPay = shoppingCart.reduce((acc, item)=>{
    return acc+item.price
},0)

console.log(PrizeToPay);