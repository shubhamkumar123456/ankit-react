import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ShowApi = () => {

    
    const [allProducts, setallProducts] = useState([]);//[{}. {}..30]
    
    console.log(allProducts) //[] , [{}, {}, {}]

    async function getProducts(){
        let res = await fetch('https://dummyjson.com/products');
        let data = await res.json();
        // console.log(data)// {products}
        // console.log(data.products) // [{}, {}, {}]
       setallProducts(data.products)
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        {allProducts.map((val,i)=>{
            return <div key={val.id}>
                    <img src={val.thumbnail} alt="" />
                    <p>{val.title}</p>
            </div>
        })}
    </div>
  )
}

export default ShowApi
