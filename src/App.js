import { useEffect, useState } from 'react';
import styles from'./App.css';
import Axios from "axios"

function App() {
  const [catFact, setCatFact] = useState("")

  const fecthCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((data)=>{
      setCatFact(data.data.fact)
    })
  }
  useEffect(()=>{

  },[])


  return (
    <div className="App">
      <button onClick={fecthCatFact}>click here cat</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
