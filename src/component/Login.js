import React,{useContext,useState} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div className="flex flex-col gap-1">
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username" 
            className="p-1 rounded-lg"/>
            <input type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            className="p-1 rounded-lg"/>
            <button onClick={handleSubmit} className="dark:border-2 bg-black p-1 m-1 text-white rounded-lg">Submit</button>
        </div>
    )
}
export default Login