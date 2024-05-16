// import React, { useState } from 'react';
// import axios from 'axios';
// import './Chatbot.css';

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [chatOpen, setChatOpen] = useState(false);

//     const handleSend = async () => {
//         if (input.trim() === '') return;

//         const userMessage = { sender: 'User', text: input };
//         setMessages([...messages, userMessage]);

//         try {
//             const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//                 prompt: input,
//                 max_tokens: 150
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer YOUR_OPENAI_API_KEY`
//                 }
//             });

//             const botMessage = { sender: 'ChatGPT', text: response.data.choices[0].text.trim() };
//             setMessages([...messages, userMessage, botMessage]);
//         } catch (error) {
//             console.error('Error fetching response from OpenAI', error);
//         }

//         setInput('');
//     };

//     const handleCloseChat = () => {
//         setChatOpen(false);
//     };

//     return (
//         <div className="chat-container">
//             {!chatOpen && (
//                 <button className="chatbot-button" onClick={() => setChatOpen(true)}>Chat with ChatGPT</button>
//             )}
//             {chatOpen && (
//                 <div className="chat-box">
//                     <button className="close-button" onClick={handleCloseChat}>Close</button>
//                     {messages.map((msg, index) => (
//                         <div key={index} className={msg.sender.toLowerCase()}>
//                             <strong>{msg.sender}:</strong> {msg.text}
//                         </div>
//                     ))}
//                     <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                         placeholder="Type a message..."
//                     />
//                     <button onClick={handleSend}>Send</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [chatOpen, setChatOpen] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'User', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: input,
                max_tokens: 150
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`
                }
            });

            const botMessage = { sender: 'ChatGPT', text: response.data.choices[0].text.trim() };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response from OpenAI', error);
        }

        setInput('');
    };

    const handleCloseChat = () => {
        setChatOpen(false);
    };

    return (
        <div className="chat-container">
            {!chatOpen && (
                <button className="chatbot-button" onClick={() => setChatOpen(true)}>Chat with ChatGPT</button>
            )}
            {chatOpen && (
                <div className="chat-box">
                    <button className="close-button" onClick={handleCloseChat}>Close</button>
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender.toLowerCase()}>
                            <strong>{msg.sender}:</strong> {msg.text}
                        </div>
                    ))}
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

