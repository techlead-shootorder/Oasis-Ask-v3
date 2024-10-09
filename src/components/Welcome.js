import React, {useContext} from "react";
import { ContextApp } from "../utils/Context";
import { useUser } from '@clerk/clerk-react'



const Welcome = () => {


    const { isSignedIn, user, isLoaded } = useUser()
    const {
        setShowSlide,
        showWelcome,
        setShowWelcome,
        showSlide,
        setMobile,
        Mobile,
        chatValue,
        setChatValue,
        handleSend,
        handleKeyPress,
      } = useContext(ContextApp);
    
  return (
    <div className={`${showWelcome ? '' : 'hidden'} flex items-center justify-center w-full`}>
      <div className="max-w-5xl">
        <h1  className="text-[54px] bg-clip-text bg-gradient-to-r from-[#4285f4] to-[#d96570] text-transparent leading-[64px] font-semibold">
          Welcome, {isSignedIn && user.fullName} to Oasis Ask 
        </h1>
        <h1 className="text-[2.6rem] text-[#A0A0A0] font-semibold">
          How Can We Assist You
        </h1>

        <div className="boxes-container flex gap-4 mt-20">
          <div onClick={(e)=>{
            handleSend(e.target.innerText)
            }} className="bg-[#f0f4f9] cursor-pointer p-5 w-[222px] flex-shrink-0 flex flex-col items-end rounded-[0.75rem] justify-between bg-secondary transition ease-in-out duration-200 hover:bg-blue-200">
            What could be causing our infertility?
          </div>

          <div onClick={(e)=>{
            handleSend(e.target.innerText)
            }} className="bg-[#f0f4f9] cursor-pointer p-5 w-[222px] flex-shrink-0 flex flex-col items-end rounded-[0.75rem] justify-between bg-secondary transition ease-in-out duration-200 hover:bg-blue-200">
            What tests or evaluations should we undergo?
          </div>
          <div onClick={(e)=>{
            handleSend(e.target.innerText)
            }} className="bg-[#f0f4f9] cursor-pointer p-5 w-[222px] flex-shrink-0 flex flex-col items-end rounded-[0.75rem] justify-between bg-secondary transition ease-in-out duration-200 hover:bg-blue-200">
            What treatment options are available for us?
          </div>
          <div onClick={(e)=>{
            handleSend(e.target.innerText)
            }} className="bg-[#f0f4f9] cursor-pointer p-5 w-[222px] flex-shrink-0 flex flex-col items-end rounded-[0.75rem] justify-between bg-secondary transition ease-in-out duration-200 hover:bg-blue-200">
            How long should we try to conceive before seeking medical help?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
