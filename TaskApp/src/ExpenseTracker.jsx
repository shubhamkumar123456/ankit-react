import React from 'react'
import './Expense.css'
const ExpenseTracker = () => {
    let arr = [
        {id:1, taskName:"html study" ,status:"incompleted",date:"17-08-2026"},
        {id:2, taskName:"Js study" ,status:"completed",date:"18-08-2026"},
        {id:3, taskName:"Css study" ,status:"incompleted",date:"18-08-2026"},
    ]
    
  return (
    <div>
      <h1 style={{textAlign:"center",color:"green"}}>Expense Tracker App </h1>
        
      <form className='ExpensePageForm' action="">
        <input type="text" placeholder='enter a task name...' />
        <input type="date" placeholder='enter Date' />
        <button>Add Task</button>
      </form>

     

      <table className='table'  cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>TaskName</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arr.map((val, i)=>{
                    //  {id:2, taskName:"Js study" ,status:"completed",date:"18-08-2026"}, 2
                    //  2 == 2 true
                    return <tr >
                        <td style={{borderBottom: i== arr.length-1? "none":"1px solid white"}}>{val.id}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white" }} >{val.taskName}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}>{val.status}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}>{val.date}</td>
                        <td style={{borderBottom: i== arr.length-1?"none":"1px solid white"}}><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
      </table>
    </div>
  )
}

export default ExpenseTracker
