import Home from "./Page/Home";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react'
import Login from "./Page/Login/Login";
import { useContext, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ContextApp } from "./utils/Context";

function App() {
  const { isSignedIn, user, isLoaded } = useUser()
  const {
    setShowSlide,
    showSlide,
    setMobile,
    Mobile,
    isDarkMode,
    setIsDarkMode,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
  } = useContext(ContextApp);

  function handleToogle(){
    setIsDarkMode(!isDarkMode);
  }

  const toggleButtonClass = `px-2 text-xl border border-gray-600 rounded-md ${!isDarkMode ? 'bg-gray-600 text-white' : 'bg-white'}`
 


  return (
    <>
      <header className="">
        <SignedOut>
          {/* Use SignInButton with an onClick event */}
          <div className=" flex gap-2 justify-end mt-4 absolute top-0 right-0 z-50">
            
            {isDarkMode ? <button className={toggleButtonClass}  onClick={handleToogle}>{<BsSun/>}</button>  : <button className={toggleButtonClass} onClick={handleToogle}>{<BsMoon/>}</button> }
            <SignInButton className="bg-[#874487] text-white px-4 py-2 rounded-md mr-4"></SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
        <div className=" flex gap-2 justify-end mt-4 absolute top-0 right-4 z-50">
        {isDarkMode ? <button className={toggleButtonClass}  onClick={handleToogle}>{<BsSun/>}</button>  : <button className={toggleButtonClass} onClick={handleToogle}>{<BsMoon/>}</button> }
          <UserButton className="bg-gray-500 text-black px-4 py-2 rounded-md mr-4"></UserButton>
          </div>
        </SignedIn>
      </header>
      <div className="overflow-hidden">
       <Home />
      </div>
    </>
  );
}

export default App;
