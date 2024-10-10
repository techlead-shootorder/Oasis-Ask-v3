import { AiOutlineClose } from "react-icons/ai";

const Modal = ({setModal}) => {
    return ((
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white px-8 rounded-md max-w-xl p-4 relative overflow-x-hidden overflow-y-scroll max-h-[80vh]">
                {/* Close button */}
                <button
                    onClick={() => setModal(false)}
                    className="absolute top-8 right-8 transform translate-x-4 -translate-y-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-200"
                >
                    <AiOutlineClose size={24} />
                </button>
                <h1 className="text-2xl text-center font-semibold mb-4">Disclaimer</h1>
                <p>
                    The <strong>"Ask Oasis" AI chatbot</strong> is designed to provide general information about fertility, reproductive health, and related services. However, the content it generates is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment.
                </p>

                <p>By using "Ask Oasis," you acknowledge and agree to the following:</p>

                <ol>
                    <li>
                        <strong>No Medical Advice</strong>: The information provided by the AI chatbot is not intended to replace professional medical advice. Always consult with a qualified healthcare professional for specific medical concerns or conditions. The chatbot's responses are based on pre-programmed data and should not be relied upon as an authoritative source for medical decisions.
                    </li>
                    <li>
                        <strong>Accuracy of Information</strong>: While we strive to ensure the accuracy of the information provided, Oasis Fertility makes no warranties or guarantees regarding the completeness, reliability, or accuracy of the responses. The chatbot's information may not reflect the most current medical knowledge or guidelines.
                    </li>
                    <li>
                        <strong>Use at Your Own Risk</strong>: Your use of the "Ask Oasis" AI chatbot is entirely at your own risk. Oasis Fertility, its affiliates, employees, or partners are not responsible for any outcomes or actions taken based on the information provided by the chatbot.
                    </li>
                    <li>
                        <strong>No Doctor-Patient Relationship</strong>: Using "Ask Oasis" does not establish a doctor-patient relationship between you and Oasis Fertility or any of its healthcare professionals. For any medical emergencies or conditions, please seek immediate assistance from a licensed healthcare provider.
                    </li>
                    <li>
                        <strong>Limitation of Liability</strong>: Oasis Fertility, its employees, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the AI chatbot or reliance on its information.
                    </li>
                    <li>
                        <strong>Data Privacy</strong>: By using "Ask Oasis," you acknowledge that any information you provide may be used in accordance with Oasis Fertility's privacy policy. While we take steps to protect your privacy, please avoid sharing any personally identifiable medical information through the chatbot.
                    </li>
                </ol>

                <p>
                    For personalized medical advice or treatment, we strongly recommend consulting with a healthcare provider at Oasis Fertility or your local medical professional.
                </p>

                <p>
                    By using "Ask Oasis," you agree to this disclaimer in full. If you do not agree with these terms, you should refrain from using the chatbot.
                </p>
                <div className="flex justify-center">
                <button
                    onClick={() => setModal(false)}
                    className=" bg-black mt-4 text-white py-2 px-4 font-semibold  rounded-md shadow-md "
                >
                    Accept
                </button>     
                </div>
               

            </div>
        </div>
    ))
}

export default Modal;