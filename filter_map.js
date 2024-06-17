// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) =>{ // for each doesn't return
//     // console.log(item)
//     return item
// })
// console.log(values);


// using filter we can use 
// const mynums = [1,2,3,4,5,6,7,8,9];

// const newNUms = mynums.filter( (num) =>{
//     return num >4;
// } )
// console.log(newNUms);

// const newNUms =[]

// myNums.array.forEach(element => {
    
// });

// map
const myNumbers = [1,2,3,4,5,6,7,8]
// const newNums = myNumbers.map((num) =>{
//     return num +10;
// })

// console.log(newNums);

//Chaining

const newNumbers = myNumbers
                    .map((num) => num*10)
                    .map((num) => num +1)
                    .filter((num) => num >=40)

console.log(newNumbers);