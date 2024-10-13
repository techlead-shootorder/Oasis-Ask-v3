import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";
import Markdown from 'react-markdown';

function Chat() {
  const { message, msgEnd, showWelcome, isDarkMode } = useContext(ContextApp);

  return (
    <div className={`${showWelcome ? 'hidden' : ''} w-full h-[85%] flex items-center justify-center overflow-hidden overflow-y-auto px-2 py-1 scroll`}>
      <div className="w-full lg:w-4/5 flex flex-col h-full items-start justify-start">
        {message?.map((msg, i) => (
          <span
            key={i}
            className={
              msg.isBot
                ? "flex items-start justify-center gap-2 lg:gap-5 my-2 p-3 rounded-md "
                : "flex items-start justify-center gap-2 lg:gap-5 my-2 p-3"
            }
          >
            <img
              src={msg.isBot ? "/oasis-logo.jpg" : "/userimage.webp"}
              alt="user"
              className="w-10 h-10 rounded object-cover"
            />
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[15px] markupp `}>
              <Markdown>{msg?.text}</Markdown>
            </p>
          </span>
        ))}
        <div className={`${isDarkMode ? 'text-white' : 'text-black'}`} ref={msgEnd}></div>
      </div>
    </div>
  );
}

export default Chat;
