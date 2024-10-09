import React, { useContext } from "react";
import { ContextApp } from "../utils/Context";

function Chat() {
  const { message, msgEnd } = useContext(ContextApp);

  const {
    setShowSlide,
    showSlide,
    showWelcome,
    setShowWelcome,
    setMobile,
    Mobile,
    chatValue,
    setChatValue,
    handleSend,
    handleKeyPress,
  } = useContext(ContextApp);

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
            <p className="text-black text-[15px]">{msg?.text}</p>
          </span>
        ))}
        <div ref={msgEnd} />
      </div>
    </div>
  );
}

export default Chat;
