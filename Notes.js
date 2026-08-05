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



// State --> are used to store data that can be changed over a period of time
// Hooks -->hooks are the function. with the help of hooks you can define state in your react application example --> useState , useEffect, useRef , useContext etc


// a) useStateHook --> is used to store the value and can also be used to re-render the component. it takes an array of two argument a variable to store a value and second is a function to update the value of variable. whenever you call the update function it will re-render the component

// normal js function
function xyz(){
    console.log("hello");
    return 10

  
}

xyz()  // function calling  // 10


// functional component --> 

function XYZ(){
    return <h1> hello</h1>
}

<XYZ/> //component calling  , <h1> hello</h1>