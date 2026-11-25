import React, { useReducer, useRef } from 'react'


// redux --> exactsame useReducer
// reduxtoolkit --> easy
 
const PacticeReducer2 = () => {

    function reducers(state , action){
        if(action.type ==="add user"){
            // return {count:10 ,arr:[{},{},{}]}
            // return {count:10 ,arr:[{},{},{}]}
            let copyArr = [...state.arr]  // [{},{}]
            copyArr.push(action.val)  // [{}, {}, {}]
            return {...state, arr:copyArr}   // {count:10 , arr:[{},{},{}]}
        }

        if(action.type ==="increment"){
            
            return {...state, count:state.count+1}  // {count:10 , [{},{},{}]}
        }
    }

    let obj = {
        count: 10,
        arr:[{name:"shubham", class:"X"} , {name:"ankit",class:"V"}]
    }
    console.log(obj)

    const[state , dispatch] = useReducer(reducers ,obj);//{count:10, arr:[{},{}]}

    let nameRef = useRef()  //{current : undefined} //{current:<input/>}
    let classRef = useRef()  //{current : undefined}

    function handleAdd(e){
            e.preventDefault()
        //shadowing of a variable
        let obj1 = {
            name: nameRef.current.value,
            class:classRef.current.value
        }

       dispatch({type:"add user",val:obj1})
    }
  return (
    <div>
        <form action="">
            <input ref={nameRef} type="text"  placeholder='enter a name'/>
            <input ref={classRef} type="text"  placeholder='enter a class'/>
            <button onClick={handleAdd}>Add Student</button>
        </form>
        <h3> Count : {state.count} </h3>

        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        
        <table>
            <thead>
                <tr>
                    <td>SNo</td>
                    <td>Name</td>
                    <td>Class</td>
                </tr>
            </thead>

            <tbody>
                {state.arr.map((ele, i)=>{
                    return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.class}</td>
                            <td><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default PacticeReducer2
