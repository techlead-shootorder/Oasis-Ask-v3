





export const sendMsgToAI = async (msg) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
   console.log("msg", msg);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`, 
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [

        { role: "user", content: msg }
      ],
      temperature: 0.2,
      max_tokens: 2048,
      n: 1,
      stop: null,
    }),
  };
  
  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    return response?.choices[0]?.message?.content;
  } catch (error) {
    console.log(error);
  }
};
