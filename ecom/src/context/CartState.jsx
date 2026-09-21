import React, { useState } from 'react'
import cartContext from './cartContext';
import { toast } from 'react-toastify';
const CartState = (props) => {
    const [cartArr, setcartArr] = useState([]); //[{},{},{}]

    console.log(cartArr)//[]

    function cartAdd(obj){
      obj.quantity = 1  //{bed:}

      let find = cartArr.find((val)=>val.id ===obj.id );  //if matched it will return same val otherwise return undefined(false condition)
      console.log(find)
      if(find){
          toast.warning("item already added",{position:"top-center"})
      }
      else{
        setcartArr([...cartArr, obj]);//
        toast.success("item added successfully",{position:"top-center"})
      }
    }


    function removeItem(obj){
          let filteredArr = cartArr.filter((ele)=>ele.id!=obj.id);
            setcartArr(filteredArr);
            toast.success("item deleted successfully")
    }

  return (
    <cartContext.Provider value={{cartArr , cartAdd, removeItem}}>
            {props.children}
    </cartContext.Provider>
  )
}

export default CartState
