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