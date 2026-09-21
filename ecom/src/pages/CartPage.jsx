import React, { useContext } from 'react'
import cartContext from '../context/cartContext'

const CartPage = () => {
    let ctx = useContext(cartContext);
    console.log(ctx)  //{cartrr, cartAdd,removeItem}
  return (
    <div>
      { ctx.cartArr.length>0 ? <table className='bg-black w-[70%] text-center text-white p-10 mx-auto'>
        <thead>
            <tr>
                <th className='p-8'>Sno</th>
                <th>product</th>
                <th>title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {
                ctx.cartArr.map((ele, i)=>{
                    return <tr>
                        <td className='p-8'>{i+1}</td>
                        <td><img className='w-[100px]' src={ele.thumbnail} alt="" /></td>
                        <td>{ele.title}</td>
                        <td>
                            <button className='bg-blue-950 px-3 py-2 rounded-md hover:bg-blue-700'>+</button>
                            <span>{ele.quantity}</span>
                            <button className='bg-blue-950 px-3 py-2 rounded-md hover:bg-blue-700'>-</button>
                        </td>

                        <td>{ele.price}</td>
                        <td><button onClick={()=>ctx.removeItem(ele)} className='bg-red-950 px-3 py-2 rounded-md hover:bg-red-700'>Delete</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>  : <h1 className='text-center font-bold text-2xl mt-[50px]'>cart is empty</h1>}
    </div>
  )
}

export default CartPage
