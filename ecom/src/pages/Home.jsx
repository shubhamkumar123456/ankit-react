import React, { useEffect, useState } from 'react'
import ShowTrending from '../components/ShowTrending';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

  const [products, setproducts] = useState([]); //[{}, {},..194]
  console.log(products)
 async function getAllProducts(){
    let res = await fetch('https://dummyjson.com/products?skip=0&limit=0');
    let data = await res.json();
    // console.log(data)//{}
    // console.log(data.products)//[{}, {},...30]
    setproducts(data.products);
 }

  let smartPhones = products.filter((ele)=>ele.category==="smartphones");
  let laptops = products.filter((ele)=>ele.category==="laptops");
  console.log(smartPhones)
  console.log(laptops)

  let navigate = useNavigate()

  function handleView(obj , i){
      console.log(obj) //localstorage
      console.log(i)
      // window.location.href = ""  --> used to navigate from one page to another
      navigate('/view',{state:obj})
  }

 useEffect(()=>{
     getAllProducts()
 },[])
  return (
    <div className='p-10' >
        

       <div className='bg-black text-white p-3'>
        <h1>Smartphones</h1>
         <ShowTrending products={smartPhones}/>
       </div>

       <div className='bg-black my-4 text-white p-3'>
        <h1>Smartphones</h1>
         <ShowTrending products={laptops}/>
       </div>

       

        
      
      <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
         {
        products.map((ele,i)=>{
          return <div className='bg-gray-400 p-5 text-center flex flex-col justify-evenly gap-3' key={ele.id}>
                  <img src={ele.thumbnail} alt="" />
                  <h3 className='font-semibold text-lg'>{ele.title}</h3>
                  <p>${ele.price}</p>
                  <button className='bg-green-900 text-white hover:bg-green-600 w-full p-2 rounded-md cursor-pointer'>Add to Cart</button>
                  <button to={'/view'} state={ele} onClick={()=>handleView(ele, i)} className='bg-blue-900 text-white hover:bg-blue-600 w-full p-2 rounded-md cursor-pointer'>View Product</button>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default Home
