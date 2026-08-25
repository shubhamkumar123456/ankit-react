import React, { useRef, useState } from 'react'
import './Expense.css'
import { toast } from 'react-toastify';
const ExpenseTracker = () => {

    let expenseRef = useRef(); // {current: undefined}
    let priceRef = useRef();  // {current: undefined}
    let dateRef = useRef();  // {current: undefined}


    const [arr , setArr] = useState([
        // {id:1, expenseName:"petrol", date:""}
    ]) //

    function handleAddTask(e){
        e.preventDefault();
       let obj = {
            id: arr.length +1,
            expenseName: expenseRef.current.value,
            price:priceRef.current.value,
            date:dateRef.current.value
       }

       if(obj.expenseName.length<=0){
            // alert("please write expense name")
            // toast.success() //green
            // toast.warning() //yellow
            toast.error("please write expense name",{position:"top-center"}) //red
            
            return;
       }
       if(!obj.price){
            toast.error("please write price",{position:"top-center"}) //red
            return;
       }
       if(!obj.date){
            toast.error("please write date",{position:"top-center"}) //red
            return;
       }
       
       let copyArr = [...arr]  //[{}, {}, {}]
       copyArr.push(obj);  //[{}, {}, {}, {}]
       console.log(copyArr)
       toast.success("expense added successfully",{position:'top-center',theme:'dark'})
       setArr(copyArr)
    }



    function handleDelete(obj , i){
        console.log(obj)
        console.log(i)

        let copyArr = [...arr]
        copyArr.splice(i , 1);
        setArr(copyArr)


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

     {/* { arr.length >0 ?
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
      </table> : <h1 style={{textAlign:"center"}}>No Data</h1>} */}

     { arr.length>0 && <table className='table'  cellPadding={10} cellSpacing={0}>
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
      </table>}

      {arr.length == 0 && <h1 style={{textAlign:"center"}}>No Data</h1>}
    </div>
  )
}

export default ExpenseTracker
