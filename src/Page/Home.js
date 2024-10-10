import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import ChatContainer from "../components/ChatContainer";
import Mobile from "../components/Mobile";
import { ContextApp } from "../utils/Context";

function Home() {
  const {
    
    isDarkMode,
    setIsDarkMode,
    
  } = useContext(ContextApp);


  return (
    <div className={`flex w-screen relative ${isDarkMode ? 'bg-black' : ''}`}>
      <LeftNav />
      <ChatContainer />
      <span className="flex lg:hidden">
        <Mobile />
      </span>
    </div>
  );
}

export default Home;
