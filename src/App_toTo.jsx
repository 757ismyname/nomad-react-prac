/*test*/
import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";



function App_toTo() {

  const [toDo, setToDo] = useState("");
  const [toDoArr, setToDoArr] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  
  useEffect(() => {
    console.log("toDoArr:",toDoArr)
  },[toDoArr]);
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDoArr((currentArr) => [toDo, ...currentArr]);
    setToDo("");
  }
  return (
    <>
      <div>
        <h1>My To Count {toDoArr.length}</h1>
        <form onSubmit={onSubmit}>
          <input 
              onChange={onChange}
              value={toDo} 
              type="text" 
              placeholder='write your todo'>
          
          </input>
          <button>Add To Do</button>
        </form>
      </div>
      <hr />
      <ul>
        {toDoArr.map((eachTodo,index) => <li key={index}>{eachTodo}</li> )}
      </ul>
    </>
  );
}

export default App_toTo
