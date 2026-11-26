import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, divide, increment, multiply, resetData } from '../redux/userSlice';
import { productAdd } from '../redux/productSlice';

const Home = () => {
    // let ctx  = useContext()
    let ctx = useSelector((state)=>state.user);
    let ctx1 = useSelector((state)=>state.product);

    let dispatch = useDispatch();

    console.log(ctx1) // {products:[{},{},{},{}]}
    console.log(ctx)

    let nameRef = useRef()  //{current:undefined} , {current:<input/>}
    let priceRef = useRef()

    function handleAdd(e){
        e.preventDefault()
        let obj = {
            id:ctx1.products.length + 1,
            name:nameRef.current.value,
            price:priceRef.current.value
        }
        dispatch(productAdd(obj))
    }
  return (
    <div>
      <h1>THis is HOme page</h1>

      <h3>Count = {ctx.count}</h3>

      <form action="">
        <input ref={nameRef} type="text" placeholder='enter product name' />
        <input ref={priceRef} type="number" placeholder='enter product price' />

        <button onClick={handleAdd}>Add Product</button>
      </form>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(divide())}>Divide by 2</button>
      <button onClick={()=>dispatch(multiply())}>Multiply by 2</button>
      <button onClick={()=>dispatch(resetData())}>Reset</button>

        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                    {
                        ctx1.products.map((ele, i)=>{
                            return <tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.price}</td>
                                    <td><button>Delete</button></td>
                            </tr>
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}

export default Home
