import { useState } from "react"


function Todo(){

     const[val,setVal]=useState("");
    const [ta]
    const addBtn=()=>{
        console.log(val);
        task.push(val);
        setVal("")
        console.log(task)
     }
    return(
        <>
        <input type="text" onChange={(e)=>setVal(e.target.value)} value={val} />
        <button onClick={addBtn}>add</button>
        </>
    )
}

export default Todo