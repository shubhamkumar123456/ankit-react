import React, { useRef, useState } from 'react'
import './Expense.css'
const ExpenseTracker = () => {

    let expenseRef = useRef(); // {current: undefined}
    let priceRef = useRef();  // {current: undefined}
    let dateRef = useRef();  // {current: undefined}


    const [arr , setArr] = useState([
        {id:1, expenseName:"movies" ,price:350,date:"17-08-2026"},
        {id:2, expenseName:"dinner" ,price:700,date:"18-08-2026"},
        {id:3, expenseName:"water park" ,price:1000,date:"18-08-2026"},
    ])

    function handleAddTask(e){
        e.preventDefault();
       let obj = {
            id: arr.length +1,
            expenseName: expenseRef.current.value,
            price:priceRef.current.value,
            date:dateRef.current.value
       }
       
       let copyArr = [...arr]  //[{}, {}, {}]
       copyArr.push(obj);  //[{}, {}, {}, {}]
       console.log(copyArr)
       setArr(copyArr)
    }



    function handleDelete(obj , i){
        console.log(obj)
        console.log(i)
    }
  
    
  return (
    <div>
      <h1 style={{textAlign:"center",color:"green"}}>Expense Tracker App </h1>
        
      <form className='ExpensePageForm' action="">
        <input ref={expenseRef} type="text" placeholder='enter a expense name...' />
        <input ref={priceRef} type="number" placeholder='enter price' />
        <input ref={dateRef} type="date" placeholder='enter Date' />
        <button onClick={handleAddTask}>add Task</button>
      </form>

     

      <table className='table'  cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Expense Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arr.map((val, i)=>{
                    //  {id:2, taskName:"Js study" ,status:"completed",date:"18-08-2026"}, 2
                    //  2 == 2 true
                    return <tr key={val.id} >
                        <td style={{borderBottom: i== arr.length-1? "none":"1px solid white"}}>{val.id}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white" }} >{val.expenseName}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}>{val.price}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}>{val.date}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}><button onClick={()=>handleDelete(val, i)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
      </table>
    </div>
  )
}

export default ExpenseTracker
