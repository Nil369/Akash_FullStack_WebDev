// Q1. Create a variable and try to add number to it

var a = "Hi!! My name is Akash & my favorite number is: ";
console.log(a+69);


// Q2. Use type of operator to find the ndatatype of the string in the above question

 console.log(typeof(a));


// Q3. Create a const object in JS. Can you change it to hold a number later??

const myIntro = {
    name: "Akash",
    cllg: "BWU",
    age: 19,
    favNum: 69,
    favFood: "Biriyani"
}
// myIntro = 100  || We cannot declare a number,string once a constant is created
console.log(myIntro)


// Q4. Try to add a new key to the conat object in Q.3...Can we do that ??

myIntro.favColor = "Blue";
myIntro.friend = "Shruti"; // Yes we can append new keys to the const objects
// But we can't change the constant's value
console.log(myIntro);


// Q5. Write a JS Program to create a word-meaning dictionary of 5 words 

const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work.",
    irenic: "tending to promote peace or reconciliation; peaceful or conciliatory.",
    stratum: "one of a number of portions or divisions likened to layers or levels."
  }
  
  console.log(dict)
  console.log(dict.yakka)