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

// quantity = 1   2     3    4    
//  price = 100  200   300  400


//  10tofee  = 200rs         202  = 204  = 206
    // 1tofee  = 200/10   = 2rs   ==  price/quantity


//  price = 100   100 + (100/1) = 200  300  400
//  quantity = 1    2             3       4
    function IncrementQuantity(obj , i){
      obj.price = obj.price + (obj.price/obj.quantity)  // 300 + (300/3)
        obj.quantity = obj.quantity+1;

        let copyArr = [...cartArr]
        cartArr[i] = obj;

        setcartArr(copyArr)
      toast.success("updated successfully",{position:"top-center"})

    }

  return (
    <cartContext.Provider value={{cartArr , cartAdd, removeItem,IncrementQuantity}}>
            {props.children}
    </cartContext.Provider>
  )
}

export default CartState
