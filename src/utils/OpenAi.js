// Define memory, websiteData, and conversationHistory at the top

let memory = {};  // Initialize an empty object for memory
let conversationHistory = [
  {
    role: "system",
    content: `You are an assistant who provides information only about Oasis Fertility's IVF treatments, Sperm count, AMH levels, and other fertility services. You can pull information from the Oasis Fertility website, including treatments such as ICSI, Egg Donation, AMH testing, Fertility preservation,Doctor, Doctors qualification, Locations and FAQs . If asked anything outside this scope, politely decline to answer.`
  },
  {
    role: "system",
    content: "You are an assistant who provides information only about Oasis Fertility's We are dedicated to helping you achieve your dream of parenthood. Spread across India with over 30 centers in 19 cities, we have brought in smiles to thousands of couples by helping them have healthy babies through science-based fertility treatments like IVF, IUI, ICSI and other latest reproductive technologies.Our experienced team of fertility experts aim to maximize your chances of success with comprehensive and personalized fertility treatments.At Oasis Fertility, we prioritize your comfort and well-being, offering a supportive and compassionate environment throughout your fertility journey. Trust Oasis Fertility to support you every step of the way in building the family you've always wanted."
  }
];  // Initialize an empty array for conversation history

// Example websiteData structure, assuming this holds static information
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
    {
      question: "How successful is IVF at Oasis Fertility?",
      answer: "IVF success rates vary, but Oasis Fertility has a high success rate, depending on individual circumstances."
    },
    {
      question: "What are the risks involved with IVF treatment?",
      answer: "Risks may include multiple pregnancies, ovarian hyperstimulation syndrome, and others, which will be discussed during your consultation."
    },
    {
      question: "What is AMH, and why is it important?",
      answer: "AMH (Anti-Müllerian Hormone) is a marker of ovarian reserve and can help assess fertility potential."
    },
    {
      question: "How do I know if I am eligible for IVF?",
      answer: "Eligibility for IVF depends on various factors including age, health conditions, and fertility issues, which can be assessed during a consultation."
    },
    {
      question: "Do I need to visit the clinic for every appointment?",
      answer: "Most appointments can be done virtually, but some procedures require in-clinic visits."
    },
    {
      question: "What is the cost of IVF at Oasis Fertility?",
      answer: "The cost of IVF varies based on treatment plans; please contact our office for detailed pricing."
    }
  ],
  doctors: [
    {
      "OasisFertility": {
        "Hyderabad": [
          {
            "name": "Dr. Sushma Jaiswal",
            "specialization": "Consultant Gynecologist, Fertility Specialist"
          },
          {
            "name": "Dr. Aditi Mehta",
            "specialization": "Fertility Specialist"
          },
          {
            "name": "Dr. Pooja Khedkar",
            "specialization": "IVF Specialist"
          },
          {
            "name": "Dr. Sandeep Nayak",
            "specialization": "Consultant Urologist, Male Fertility Specialist"
          },
          {
            "name": "Dr. Shweta Patil",
            "specialization": "Consultant Obstetrician & Gynecologist"
          },
          {
            "name": "Dr. Surya K",
            "specialization": "IVF Specialist"
          }
        ],
        "Bangalore": [
          {
            "name": "Dr. Suman B. S",
            "specialization": "Senior Consultant, Reproductive Medicine"
          },
          {
            "name": "Dr. Radhika Srikantiah",
            "specialization": "Consultant Obstetrician & Gynecologist, Infertility Specialist"
          },
          {
            "name": "Dr. Haritha R",
            "specialization": "Consultant Reproductive Medicine"
          },
          {
            "name": "Dr. Sanjay G",
            "specialization": "Senior Consultant Urologist"
          },
          {
            "name": "Dr. Shilpa Sharma",
            "specialization": "Consultant Gynecologist"
          }
        ],
        "Chennai": [
          {
            "name": "Dr. Karthik S",
            "specialization": "Consultant Gynecologist and IVF Specialist"
          },
          {
            "name": "Dr. Archana S",
            "specialization": "Reproductive Endocrinologist"
          },
          {
            "name": "Dr. K. R. B. Jagan",
            "specialization": "Urologist, Male Fertility Specialist"
          },
          {
            "name": "Dr. Subha Krishnan",
            "specialization": "Fertility Specialist"
          },
          {
            "name": "Dr. Sangeetha D",
            "specialization": "Consultant Obstetrician"
          }
        ],
        "Vijayawada": [
          {
            "name": "Dr. Surya S. N",
            "specialization": "Consultant Gynecologist, Fertility Specialist"
          },
          {
            "name": "Dr. Pramod Kumar",
            "specialization": "Reproductive Medicine Specialist"
          },
          {
            "name": "Dr. Ashwini K",
            "specialization": "Consultant Obstetrician"
          }
        ],
        "Mangalore": [
          {
            "name": "Dr. Jyothi Shenoy",
            "specialization": "Consultant Gynecologist, Infertility Specialist"
          },
          {
            "name": "Dr. Shilpa Rao",
            "specialization": "Senior Consultant, Reproductive Medicine"
          },
          {
            "name": "Dr. Asha D",
            "specialization": "Consultant Obstetrician & Gynecologist"
          }
        ],
        "Coimbatore": [
          {
            "name": "Dr. Usha R",
            "specialization": "Consultant Gynecologist"
          },
          {
            "name": "Dr. Priya S",
            "specialization": "Fertility Specialist"
          },
          {
            "name": "Dr. K. Shankar",
            "specialization": "Urologist, Male Fertility Specialist"
          }
        ],
        "Pune": [
          {
            "name": "Dr. Sanjay P. Tiwari",
            "specialization": "Consultant Fertility Specialist"
          },
          {
            "name": "Dr. Vinod K. Jain",
            "specialization": "Consultant Reproductive Medicine"
          },
          {
            "name": "Dr. Shruti M",
            "specialization": "Consultant Gynecologist"
          }
        ],
        "Tirupati": [
          {
            "name": "Dr. Srikant S",
            "specialization": "Senior Consultant, Reproductive Medicine"
          },
          {
            "name": "Dr. Anitha P",
            "specialization": "Consultant Obstetrician & Gynecologist"
          }
        ],
        "Jaipur": [
          {
            "name": "Dr. Neelam Jain",
            "specialization": "Consultant Fertility Specialist"
          },
          {
            "name": "Dr. Hemlata B",
            "specialization": "IVF Specialist"
          }
        ],
        "Visakhapatnam": [
          {
            "name": "Dr. Pavan K.",
            "specialization": "Consultant Gynecologist, Infertility Specialist"
          },
          {
            "name": "Dr. Ramesh K.",
            "specialization": "Senior Urologist, Male Fertility Specialist"
          }
        ],
        "Thiruvananthapuram": [
          {
            "name": "Dr. Renuka S",
            "specialization": "Consultant Obstetrician & Gynecologist"
          },
          {
            "name": "Dr. Rajeev K.",
            "specialization": "Fertility Specialist"
          }
        ],
        "Raipur": [
          {
            "name": "Dr. Abhishek A",
            "specialization": "Consultant Reproductive Medicine"
          },
          {
            "name": "Dr. Sunita K",
            "specialization": "Consultant Gynecologist"
          }
        ],
        "Surat": [
          {
            "name": "Dr. Rupal J",
            "specialization": "Consultant Gynecologist"
          },
          {
            "name": "Dr. Meenal K",
            "specialization": "Fertility Specialist"
          }
        ]
      }
    }
    // Add more doctors as needed
  ]
};


// The rest of your OpenAi.js code...
export const sendMsgToAI = async (msg, onChunkReceived) => {
  if (typeof msg !== 'string') {
    return "Input message must be a string.";
  }

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
    return `Oasis Fertility offers the following IVF and fertility services: ${websiteData.services.join(', ')}.`;
  }

  // If the user asks about FAQs, respond with pre-defined FAQs
  if (msg.toLowerCase().includes("faqs") || msg.toLowerCase().includes("questions")) {
    return `Here are some common FAQs from Oasis Fertility:\n- ${websiteData.faqs.join('\n- ')}`;
  }
  if (msg.toLowerCase().includes("working hours")) {
    return "Our clinic is open from 9 AM to 5 PM, Monday to Friday.";
}
if (msg.toLowerCase().includes("Doctor list")) {
  return "Oasis Fertility was co-founded by Dr. Durga G Rao and Kiran Gadela. Dr. Durga G Rao is a renowned fertility specialist, and Kiran Gadela is an entrepreneur with a focus on healthcare. Together, they established Oasis Fertility to provide advanced fertility treatments and reproductive healthcare services.";
}
if (msg.toLowerCase().includes("Doctor list")) {
  return `Here are some our Docter list:\n- ${websiteData.doctors.join('\n- ')}`;
}


  // Add the remembered information to the system's context if any
  if (memory['info']) {
    conversationHistory[0] = { 
      role: "system", 
      content: `You are an assistant who only provides information about Oasis Fertility's IVF treatments, Sperm count, AMH, and you remember the following: "${memory['info']}". If asked anything outside this scope, politely decline to answer.` 
    };
  }

  // Add the user's message to the conversation history
  conversationHistory.push({ role: "user", content: msg });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,  // Add your API Key here
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: conversationHistory, // Send the entire conversation history
      temperature: 0.2,
      stream: true  // Enable streaming
    }),
  };

  const response = await fetch(API_URL, requestOptions);
  
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const parsedChunk = chunk.split("\n").filter(line => line && line.startsWith('data:')).map(line => line.slice(5).trim());

    for (let i = 0; i < parsedChunk.length; i++) {
      const data = parsedChunk[i];
      if (data === "[DONE]") return;

      try {
        const json = JSON.parse(data);
        const chunkMessage = json.choices[0]?.delta?.content;
        if (chunkMessage) {
          onChunkReceived(chunkMessage);  // Pass the chunk to the callback
        }
      } catch (error) {
        console.error("Error parsing JSON stream:", error);
      }
    }
  }
};


  
  
