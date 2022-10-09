import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");
    
    function countHandle(){
        setCount(count+100);
    }
    return (
    
    <div>
      <h1>Count is {count}</h1>
      <button onClick={countHandle}>+100</button>
      <hr />
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <h1>{text}</h1>
    </div>
  )
}

export default Counter
