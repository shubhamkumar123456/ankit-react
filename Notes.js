// Install react App
// a) install Node js
// b) install react app --> npm create vite@latest

// c) move parent folder to child --> cd folderName 
// d) move child folder to parent --> cd ..
// e) run your project --> npm run dev 


// React --> react is open socurce js library used to build user interface specially for single page application. it uses component based approach and virtual DOM which make it faster

// JSx --> it is a extension (javascript xml). it allows you to write html inside js

// Component --> it is a small piece of code or a part of UI that is reusable. component are two types class based component and functional component;

// Functional component --> can be declare same as functions in js but functional component return a react element ( html tag). it consist of html css and js code

// virtual Dom --> it is a copy of real Dom, whenever any component state or props changes react creates a new virtual DOM tree. then it compares it to the previous tree and then apply minimum set of changes neccessary to real DOM

// State --> are used to store data that can be changed over a period of time

// Hooks -->hooks are the function. with the help of hooks you can define state in your react application example --> useState , useEffect, useRef , useContext etc


// a) useStateHook --> is used to store the value and can also be used to re-render the component. it takes an array of two argument a variable to store a value and second is a function to update the value of variable. whenever you call the update function it will re-render the component

// b) useRef --> can reference any react element ( used to copy any react tag to a variable)


// c) useEffect Hook --> used to run sideeffects such updating the dom element, fetch api, it take two argument a callbackfunction and a array of dependency. if array of dependency is blank useEffect will run only one time.

// normal js function
// function xyz(){
//     console.log("hello");
//     return 10 
// }

// xyz()  // function calling  // 10


// // functional component --> 

// function XYZ(){
//     return <h1> hello</h1>
// }

// <XYZ/> //component calling  , <h1> hello</h1>


// Props --> with the help of props you can pass data from parent component to child component