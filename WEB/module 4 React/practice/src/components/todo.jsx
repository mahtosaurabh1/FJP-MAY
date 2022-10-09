import React from "react";
import { useState } from "react";
import './todo.css'
function Todo() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const addHandle = () => {
    setArr([...arr, text]);
    console.log(arr);
    setText("");
  };

  const filterArr=(id)=>{
    let newArr=arr.filter((task,i)=>{
        return id != i;
    })
    setArr(newArr)
  }

  return (
    <div className="container">
     <div className="inputbox">
     <input type="text" onChange={handleInput} value={text} />
      <button onClick={addHandle}>ADD</button>

     </div>
      {arr.map((task, i) => {
        return (
          <ul className="ulist">
            <li contentEditable="true">{task}</li>
            <button onClick={()=>filterArr(i)}>delete</button>

          </ul>
        );
      })}
    </div>
  );
}

export default Todo;
