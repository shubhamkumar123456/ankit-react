import React, { useContext } from 'react'
import cartContext from '../context/cartContext'

const CartPage = () => {
    let ctx = useContext(cartContext);
    console.log(ctx)
  return (
    <div>
      <table className='bg-black w-[70%] text-center text-white p-10 mx-auto'>
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
                        <td><button className='bg-red-950 px-3 py-2 rounded-md hover:bg-red-700'>Delete</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default CartPage
