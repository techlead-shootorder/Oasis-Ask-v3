import React, { useContext, useState } from "react";
import { ContextApp } from "../utils/Context";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiSendPlane2Fill } from "react-icons/ri";
import Chat from "./Chat";
import Welcome from "./Welcome";
function ChatContainer() {
  const {
    showSlide,
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
    isDarkMode,
  } = useContext(ContextApp);

  const [modal, showModal] = useState(false);



  

 

  return (
    <div
      className={
        showSlide
          ? "h-screen w-screen bg-white flex items-start justify-between flex-col p-2"
          : "h-screen w-full lg:w-[calc(100%-300px)] bg-white-700 flex items-start justify-between flex-col p-2"
      }
    >
     
      <span
        className="rounded px-3 py-[9px] hidden lg:flex items-center justify-center text-black m-1 "
        // onClick={() => setShowSlide(!showSlide)}
      >
        {/* {showSlide && <LuPanelLeftOpen />} */}
      </span>
      <span
        className={`rounded px-3 py-[9px] lg:hidden flex items-center justify-center cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} mt-0 mb-3 border border-gray-600`}
        title="Open sidebar"
        onClick={() => setMobile(!Mobile)}
      >
        
        <HiOutlineMenuAlt2 fontSize={20} />
      </span>
      
      <Chat />

       <Welcome />

      {/* chat input section */}
      <div className=" w-full  m-auto flex items-center justify-center flex-col gap-2 my-2 ">
      
        <span className={`flex gap-2 items-center justify-center ${isDarkMode ? 'bg-[#1e1f20]' : 'bg-[#f0f4f9]'} rounded-full shadow-md w-[90%] lg:w-2/5 xl:w-1/2`}>
          <input
            type="text"
            placeholder="Enter a prompt Here"
            className={`h-full  ${isDarkMode ? 'text-white' : 'text-black'} bg-transparent px-4 py-4 w-full border-none outline-none text-base`}
            value={chatValue}
            onChange={(e) => setChatValue(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <RiSendPlane2Fill
            title="send message"
            className={
              chatValue.length <= 0
                ? "text-gray-400 cursor-auto mr-6 text-xl"
                : `${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer mr-6 text-3xl p-1 rounded `
            }
            onClick={handleSend}
          />
        </span>
        <p onClick={()=> showModal(true)} className="lg:text-xs text-gray-400 text-center text-[10px]">
        © Sadguru Healthcare Services Pvt Ltd. 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default ChatContainer;
