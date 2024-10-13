import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "./OpenAi";

export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [message, setMessage] = useState([
    {
      text: "Hi, I'm your assistant! How can I help you today?",
      isBot: true,
    },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const msgEnd = useRef(null);

  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  // Send message function with streaming support
  const handleSend = async (query = '') => {
    let text = '';
    if (chatValue) {
      text = chatValue;
    } else {
      text = query;
    }

    // Add the user's message to the chat
    setChatValue("");
    setMessage((prevMessages) => [
      ...prevMessages,
      { text, isBot: false }
    ]);
    setShowWelcome(false);

    // Add an empty bot message that will be updated with streamed chunks
    let botMessage = { text: "", isBot: true };
    setMessage((prevMessages) => [
      ...prevMessages,
      botMessage
    ]);

    // Stream the AI response
    await sendMsgToAI(query ? query : text, (chunk) => {
      // Append each chunk to the bot's message
      botMessage.text += chunk;
      setMessage((prevMessages) => [...prevMessages]);
    });
  };

  // Handle "Enter" key press to send the message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Handle query button clicks (FAQs, suggestions, etc.)
  const handleQuery = async (e) => {
    const text = e.target.innerText;
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
    setShowWelcome(false);
  };

  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        showWelcome,
        setShowWelcome,
        isDarkMode,
        setIsDarkMode,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        handleQuery,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default AppContext;
