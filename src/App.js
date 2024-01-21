import { useEffect, useState } from 'react';
import styles from'./App.css';
import Axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [predictAge, setPredictAge] = useState(null)

  const fecthData = ()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictAge(res.data)
    })
  }

  return (
    <div className="App">
      <input placeholder='like: victor' onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <button onClick={fecthData}>tell the age</button>
      
      <h1>age is: {predictAge?.age}</h1>
    </div>
  );
}

export default App;
