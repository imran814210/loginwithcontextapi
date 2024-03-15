import React,{useContext} from "react";
import UserContext from "../context/UserContext";
import Data from './Data.json';
import { data } from "autoprefixer";
function Profile(){
    const {user}=useContext(UserContext)
    if(!user) return <div>Please Login</div> 
 
        if(user.username==="imran") return <div>Welcome {user.username}</div>
        else return <div>Please Correct UserName  and Password</div>     

}
export default Profile