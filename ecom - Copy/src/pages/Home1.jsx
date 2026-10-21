import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home1 = () => {
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
     const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

//  async function getAllProducts() {
//     try {
//       let res = await fetch(
//         `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
//       );

//       let data = await res.json();
//       console.log(data)
//       setProducts([...products,...data.products]);
//       setSkip(skip+limit);
//       if (skip + data.products.length >= data.total) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setHasMore(false);
//     }
//   }

   async function getAllProducts() {
    try {
      if(showProducts.length==0){
          let res = await fetch(
        `https://dummyjson.com/products?skip=0&limit=0`
      );

      let data = await res.json();
      console.log(data)
      setProducts(data.products);
      setShowProducts(data.products.slice(0, limit));
      setSkip(limit);
      if(limit >=data.products.length){
        setHasMore(false);
      }
      }
      else{
         let items = products.slice(skip, skip + limit);
         setShowProducts([...showProducts,...items]);
          setSkip( skip + limit);
          if (skip + limit >= products.length) {
          setHasMore(false);
        }

      }
      
      
    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  }
  

  useEffect(()=>{
        getAllProducts()
  },[])

  return (
    <div>
            <InfiniteScroll

                dataLength={showProducts.length}
                next={getAllProducts}
                hasMore={hasMore}
                loader={<h4>Loading products...</h4>}
                endMessage={<p>You have seen all products!</p>}
            >

         
            <div>
                {
                    showProducts.map((ele,i)=>{
                        return <div>
                                <img src={ele.thumbnail} alt="" />
                                <p>{ele.title}</p>
                                <button>Add to cart</button>
                        </div>
                    })
                }
            </div>

               </InfiniteScroll>
    </div>
  )
}

export default Home1
