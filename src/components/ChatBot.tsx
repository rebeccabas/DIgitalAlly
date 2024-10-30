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
    <div className={`flex w-full py-2 px-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-3/4 rounded-2xl p-3 ${isUser ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-800 shadow-md'}`}>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg border border-gray-200"> {/* Increased max width */}
        <div className="text-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg text-white">
          <h1 className="text-2xl font-bold">ChatBot</h1>
          <p className="text-sm">"Your friendly AI assistant"</p>
        </div>
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 h-96" // Increased height to h-96
        >
          {chatMessages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
          ))}
        </div>
        <div className="bg-white border-t border-gray-200 p-4 flex items-center shadow-md rounded-b-lg">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-80 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
