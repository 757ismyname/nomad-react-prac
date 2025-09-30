/*test*/
import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Hello() {

  function destroyed() {
    console.log("destroyed");
  }

  function effectFunction() {
    console.log("create");
    return destroyed;
  }
  useEffect(effectFunction,[])

  useEffect(() => {
    console.log("hi")
    return function() {
      console.log("bye")
    }
  })

  return <h1>hello</h1>
}

function App() {

  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  return (
    <>
      <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "hide" : "show"}</button>      
      </div>
    </>
  )
}

export default App
