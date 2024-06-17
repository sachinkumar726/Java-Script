// for loop

// const array = [1,23,4,5,];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;

//     if(element == 5){
//         console.log("5 is the prime no.")
//     }
//     console.log(element);
    
// }

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`)
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(`${i} * ${j} = ${i*j}`);
    }
    
}