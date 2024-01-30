import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"


export const ChangeProfile = ()=>{

    const {setusername} = useContext(AppContext)
    const [newUsername, setNewUserName] = useState("")
    return (
        <div>
            <input onChange={(e)=>{setNewUserName(e.target.value)}}/>
            <button onClick={()=>{setusername(newUsername)}}>Change the userName</button>
        </div>
    )
}