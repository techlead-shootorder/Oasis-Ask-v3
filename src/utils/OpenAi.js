// Array to keep track of the message history
let conversationHistory = [
  { 
    role: "system", 
    content: `You are an assistant who provides information only about Oasis India's IVF treatments, Sperm count, AMH levels, and other fertility services. You can pull information from the Oasis India website, including treatments such as ICSI, Egg Donation, AMH testing, Fertility preservation, and FAQs. If asked anything outside this scope, politely decline to answer.` 
  }
];

// Object to store key information the assistant should "remember"
let memory = {};

// Additional data pulled from the website for explicit usage
const websiteData = {
  services: [
    "IVF (In Vitro Fertilization)",
    "ICSI (Intracytoplasmic Sperm Injection)",
    "Egg Donation",
    "Fertility Preservation (Egg & Sperm Freezing)",
    "AMH Testing (Anti-Müllerian Hormone)",
    "Laparoscopy",
    "Hysteroscopy",
    "PGS (Preimplantation Genetic Screening)",
    "PGD (Preimplantation Genetic Diagnosis)"
  ],
  faqs: [
    "How successful is IVF at Oasis India?",
    "What are the risks involved with IVF treatment?",
    "What is AMH, and why is it important?",
    "How do I know if I am eligible for IVF?",
    "Do I need to visit the clinic for every appointment?",
    "What is the cost of IVF at Oasis India?"
  ],
  success:[
    "We are happy to be blessed with a beautiful baby girl A couple who were struggling with their journey to parenthood shares their happiness and gratitude towards Oasis Fertility. Mrs and Mr Kumar"
  ]
};

export const sendMsgToAI = async (msg) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  // Check if the user wants the assistant to "remember" or "forget" something
  if (msg.toLowerCase().startsWith("remember")) {
    const infoToRemember = msg.substring(9).trim(); // Extract info to remember
    memory['info'] = infoToRemember; // Store it in memory
    return `I will remember this: "${infoToRemember}".`;
  } else if (msg.toLowerCase().startsWith("forget")) {
    memory = {}; // Clear the memory
    return "I have forgotten all remembered information.";
  }

  // If the user asks about services, respond with pre-defined info from the website
  if (msg.toLowerCase().includes("services")) {
    return `Oasis India offers the following IVF and fertility services: ${websiteData.services.join(', ')}.`;
  }

  // If the user asks about FAQs, respond with pre-defined FAQs
  if (msg.toLowerCase().includes("faqs") || msg.toLowerCase().includes("questions")) {
    return `Here are some common FAQs from Oasis India:\n- ${websiteData.faqs.join('\n- ')}`;
  }

  // Add the remembered information to the system's context if any
  if (memory['info']) {
    conversationHistory[0] = { 
      role: "system", 
      content: `You are an assistant who only provides information about Oasis India's IVF treatments, Sperm count, AMH, and you remember the following: "${memory['info']}". If asked anything outside this scope, politely decline to answer.` 
    };
  }

  // Add the user's message to the conversation history
  conversationHistory.push({ role: "user", content: msg });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`, 
    },
    body: JSON.stringify({
      model: "gpt-4o",
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
