import UserContextProvider from "./context/UserContextProvider";
import Login from './component/Login'
import Profile from './component/Profile'
import { MdOutlineLightMode,MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
function App() {
  const[chmode,setChmode]=useState(true);
  const changMode=()=>{
     setChmode(!chmode);

  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(chmode?'light':'dark')
  },[chmode])
  return (
    <UserContextProvider>
          <div className="flex w-full justify-center items-center">
              <div className="flex dark:bg-black dark:text-white justify-center flex-col rounded-lg mt-[100px] items-center w-[600px] bg-slate-400">
                    <div className="flex justify-between w-full">
                      <div className="text-center w-[90%]"><h1 className="text-white text-3xl mb-3">React Login With Context API</h1></div>
                      <div className="w-[10%] text-right p-2">
                        <button onClick={changMode}>{chmode?<MdOutlineDarkMode />:<MdOutlineLightMode />}</button>
                        </div>
                    </div>
                      <Login/>
                      <Profile/>          
              </div> 
          </div>
   </UserContextProvider>
  );
}

export default App;
