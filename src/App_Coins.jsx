/*test*/
import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";



function App() {

  const [loading, setLoading] = useState(true);

  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) =>{
      setCoins(json);
      setLoading(false);
  });
  },[])

  return (
    <>
      <div>
        <h1>The Coins {coins.length}</h1>
        {loading ? <strong>loading...</strong> : null}
        <ul>
          {coins.map((eachCoins) => (
            <li key={eachCoins.div}>
              {eachCoins.name} {eachCoins.symbol} ({eachCoins.quotes.USD.price})
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default App

