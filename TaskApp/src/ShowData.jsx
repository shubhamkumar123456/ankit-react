import React from 'react'

const ShowData = () => {
    let x = 10; // number
    let text = "hello"
    let obj = {name:"one", age:45, course:"fullstack"}

    let arr = [10, 20, 30, 40];

    let data = [
        {name:"john", age:45, course:"frontend"},
        {name:"ankit", age:35, course:"fullstack"},
        {name:"nick", age:55, course:"backend"},
    ]
  return (
    <div>

        {data.map((val, i)=>{
            return <div>
                    <p>{val.name}</p>
                    <p>{val.age}</p>
                    <p>{val.course}</p>
            </div>
        })}

       

      <h1>THis is Show Data Page</h1>
      <p> {x}  </p>
      <p>{text}</p>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <p>{obj.course}</p>
      {/* <p>{arr[0]}</p>
      <p>{arr[1]}</p>
      <p>{arr[2]}</p>
      <p>{arr[3]}</p> */}

      <div>
        {arr.map((val, i)=>{
            return <p>{val}</p>
        })}
      </div>

      <p>hello</p>
      <input type="text" />
      <button>click me</button>


    </div>
  )
}

export default ShowData
