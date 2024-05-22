// object can define two way literal and constructor

//singleton
//object.create



// object literals
const mysym = Symbol("key1");

const jsUser ={
    name: "Sachin",
    "full Name": "Sachin Mandal",// we can not access using . notation
    age: 22,
    mysym: "mykey1",
    location: "Bangalore",
    isLogedIn: false,
    email: 'sachin123@gmal.com',
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log( jsUser[mysym]);

// jsUser.email = "sachinmandal@gmail.com";
// Object.freeze(jsUser);// after freezing we can't change the value of objects;
// jsUser.email= "sachin@gamil.com";
// console.log(jsUser.email)
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello js user");


// }
// jsUser.greetingtwo = function(){
//     console.log("Hello js user",`${this.name}`);

// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

//************onjects TWo ******************** */

//object singleton

//const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123";
tinderUser.name = "sachin";
tinderUser.isLogedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sam@gamil.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "Ram"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"c"};

// const obj3 = {obj1,obj2};// this method can't combine two object
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
    id: 1,
    email: "sachin@gmail.com"
    }

]
//users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // finding keys of the object
// console.log(Object.values(tinderUser)); // finding values of the object
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogedIn')); // checking property present or not 

//*************************************** */

const course = {
    coursename : "js in hindi",
    price: "120",
    courseIntstructor: "sachin"
}
//course.courseIntstructor
const {courseIntstructor: instructor} =course;
console.log(instructor);

// const navbar = ({company}) =>{

// }

// navbar(company = "hitesh")


/**************** API ****************** */

// {
//     "name ": "sachin",
//     "coursename ": "js in hindi",
//     "price": "free"

// }
[
    {},
    {},
    {},
]


