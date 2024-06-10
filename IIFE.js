//Immediatly Invoked function Expressions IIFE 

(function chai(){
    console.log("DB Connected")
})(); // for stoping the iife  we can use semicolon

((name)=>{
    console.log(`DB connected ${name}`);
})('sachin');