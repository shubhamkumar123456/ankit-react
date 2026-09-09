import React from 'react'


const ShowTrending = (props) => {
    console.log(props) //{products:[smartphones]}
  return (
    <div>
      {
        props.products.map((ele,i)=>{
            return <div>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
            </div>
        })
      }
    </div>
  )
}

export default ShowTrending
