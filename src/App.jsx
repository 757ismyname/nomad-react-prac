/*test*/
import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
import Movie from "./component/Movie";
import Home from "./route/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Detail from "./route/Detail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
