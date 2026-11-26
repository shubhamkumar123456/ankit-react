import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products:[
        {id:1, name:"iphone",price:1000},
        {id:2, name:"shirt",price:2000},
        {id:3, name:"xbox",price:3000},
        {id:4, name:"cycle",price:4000},
    
    ]
  },
  reducers: {
    productAdd:(state,action)=>{
        console.log(action)
        console.log(action.payload)
        state.products.push(action.payload)
    },
    productDelete:(state,action)=>{

    },

    productUpdate:(state, action)=>{

    }
  }
})

export const { productAdd, productDelete, productUpdate } = productSlice.actions

export default productSlice.reducer