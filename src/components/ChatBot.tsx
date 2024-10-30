import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

interface ChatMessage {
 text: string;
 isUser: boolean;
}

const ChatMessage: React.FC<{ message: string; isUser: boolean }> = ({ message, isUser }) => {
 const [displayText, setDisplayText] = useState('');
 const [isTyping, setIsTyping] = useState(!isUser);

 useEffect(() => {
   if (!isUser) {
     setIsTyping(true);
     setTimeout(() => {
       setIsTyping(false);
       let i = 0;
       const typingInterval = setInterval(() => {
         setDisplayText(message.slice(0, i));
         i++;
         if (i > message.length) {
           clearInterval(typingInterval);
         }
       }, 30);
       return () => clearInterval(typingInterval);
     }, 1500);
   } else {
     setDisplayText(message);
   }
 }, [message, isUser]);

 return (
   <div
     className={`flex w-full py-2 px-4 ${
       isUser ? 'justify-end bg-[#F0F0F0]' : 'justify-start'
     }`}
   >
     <div
       className={`max-w-3/4 rounded-lg p-3 ${
         isUser ? 'bg-[#7B1FA2] text-white' : 'bg-[#E8E8E8] text-gray-800'
       }`}
     >
       {isTyping ? (
         <div className="animate-pulse">•••</div>
       ) : (
         <div className="whitespace-pre-wrap">{displayText}</div>
       )}
     </div>
   </div>
 );
};

const ChatBot: React.FC = () => {
 const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
 const [inputMessage, setInputMessage] = useState('');
 const chatContainerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
   if (chatContainerRef.current) {
     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
   }
 }, [chatMessages]);

 const handleSendMessage = async () => {
   if (inputMessage.trim()) {
     const newMessage: ChatMessage = { text: inputMessage, isUser: true };
     setChatMessages((prev) => [...prev, newMessage]);
     setInputMessage('');

     try {
       const response = await fetch('http://127.0.0.1:8000/api/support-chat', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ message: inputMessage }),
       });

       if (!response.ok) {
         throw new Error('Network response was not ok');
       }

       const data = await response.json();
       const botMessage: ChatMessage = { text: data.response, isUser: false };
       setChatMessages((prev) => [...prev, botMessage]);
     } catch (error) {
       console.error('Error:', error);
       const errorMessage: ChatMessage = {
         text: "Sorry, I couldn't process your request. Please try again.",
         isUser: false,
       };
       setChatMessages((prev) => [...prev, errorMessage]);
     }
   }
 };

 return (
   <div className="flex flex-col h-screen">
     <div
       ref={chatContainerRef}
       className="flex-1 overflow-y-auto bg-white p-4 space-y-4"
     >
       {chatMessages.map((msg, index) => (
         <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
       ))}
     </div>
     <div className="bg-white border-t border-[#CCCCCC] p-4 flex items-center">
       <input
         type="text"
         value={inputMessage}
         onChange={(e) => setInputMessage(e.target.value)}
         onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
         placeholder="Type your message..."
         className="flex-1 p-2 rounded-l-lg border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#7B1FA2]"
       />
       <button
         onClick={handleSendMessage}
         className="bg-[#7B1FA2] hover:bg-[#6A1B9A] text-white px-4 py-2 rounded-r-lg"
       >
         <Send className="w-5 h-5" />
       </button>
     </div>
   </div>
 );
};

export default ChatBot;