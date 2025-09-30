/*test*/
import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value)
  const onClick = () => setValue((prev) => prev + 1);
  
  useEffect(() => {
    console.log("Render")
  },[])

  useEffect(() => {
    console.log("change count ", counter)
  },[counter])

  useEffect(() => {
    // if(keyword !== "" && keyword.length > 5 ) {
      console.log("search keyword ", keyword);
    // }
  },[keyword])
  

    useEffect(() => {
    console.log("total change ", counter, " ::" , keyword)
  },[counter,keyword])
  

  return (
    <>
      <div>
        <input
          value={keyword} 
          onChange={onChange}
          type="text"
          placeholder="search here..."
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click Me</button>
        {/* <h1 className={styles.title}>welcome back</h1> */}
        {/* <Button text={"Continue"}/> */}
      </div>
    </>
  )
}

export default App
