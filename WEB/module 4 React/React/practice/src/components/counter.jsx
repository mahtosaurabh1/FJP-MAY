import { useState } from "react"


function Counter(){
    const [count,setCount]=useState(0);
  let  addOne=()=>{
       setCount(count+1)
    }
    return(
        <>
        <h1>Counter is :-  {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        <button onClick={()=>{setCount(count-1)}}>-1</button>
        </>
    )
}

export default Counter