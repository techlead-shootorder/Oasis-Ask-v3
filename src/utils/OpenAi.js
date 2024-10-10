

// Array to keep track of message history
let conversationHistory = [
  { "role": "system", "content": "You are an assistant who only provides information about Oasis India's IVF treatments, Sperm count, and AMH. If asked anything outside this scope, politely decline to answer." }
];

export const sendMsgToAI = async (msg) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const ReactAPP = process.env.REACT_APP_OPEN_AI_API_KEY;
  console.log("ReactAPP", ReactAPP);
  console.log("msg", msg);

  // Add the user's message to the conversation history
  conversationHistory.push({ role: "user", content: msg });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`, 
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: conversationHistory, // Send the entire conversation history
      temperature: 0.2,
      max_tokens: 2048,
      n: 1,
      stop: null,
    }),
  };

  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    
    // Get the assistant's response
    const assistantMessage = response?.choices[0]?.message?.content;

    // Add the assistant's response to the conversation history
    conversationHistory.push({ role: "assistant", content: assistantMessage });

    return assistantMessage;
  } catch (error) {
    console.log(error);
  }
};
