import "./styles.css";
// import Students from "./Student";
// import Time from "./Time";
// import FormCon from "./FormControl";
// import Hook from "./hooks.js";
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [lis, setList] = useState([]);

  function addItems(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }
  function toList() {
    setList((prev) => [...prev, item]);
    console.log(lis);
    setItem("");
  }
  function removeItem(event){
  
    const elementId= event.target.id;
    const newList = lis.filter((ele ,index) => (lis[index] !== lis[elementId]));
     console.log(elementId , newList , )
      setList(newList)
      
      

  }

  return (
    <div>
      <h1> One</h1>
      <input onChange={addItems} type="text" name="fName" value={item} />
      <button onClick={toList}> click</button>
      <ul>
        <li> A list </li>
        {lis.map((ele , index) => (
          <li  onClick={removeItem}  id={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
