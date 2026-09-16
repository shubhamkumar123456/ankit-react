import React, { useState } from 'react'
import cartContext from './cartContext';

const CartState = (props) => {
    const [cartArr, setcartArr] = useState([]); //
    console.log(cartArr)

  return (
    <cartContext.Provider value={{cartArr , setcartArr}}>
            {props.children}
    </cartContext.Provider>
  )
}

export default CartState
