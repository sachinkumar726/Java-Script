const PromiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls , cryptography , network call

    setTimeout (function(){
        console.log('Async task is compelete');
        resolve()
    }, 100)

} )

PromiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new  Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username: "sachin", email: "example@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh", password:"123"});
        }
        else{
            reject('Error: Something went wrong');
        }
    },1000)
})
promiseFour
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or reject");
})

// promise five using async await
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password:"123"})
        }
        else{
            reject("Error: Js went wrong");
        }
    }, 1000)
});

async function cosumePromisefive(){
   try{
    const response = await promiseFive;
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

cosumePromisefive()


async function getAlluseers(){
    try{
        const response = await fetch('https://jsonplaceholder.org/users');
        // console.log(response);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("E",error)
    }
}
// getAlluseers()

const getAllData = function (){
    fetch('https://jsonplaceholder.org/users')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    })
    .catch((error) => console.log(error))
}

getAllData();