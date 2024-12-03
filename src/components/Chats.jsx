import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chats.css'; // Import CSS file for styling

const Chats = () => {
  const { userId} = useParams(); // Retrieve the user ID from the URL
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch chat messages for the user (replace this with actual data fetching logic)
    setMessages([
      { id: 1, text: 'Hello!', from: 'user' },
      { id: 2, text: 'Hi there!', from: 'me' },
    ]);
  }, [userId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, from: 'me' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat with User {userId}</h1>
        <div className="chaticons">
          <img src="data:image/jpeg;base64,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" alt=""/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQMR8BmhxjISdGFcxjLVDjpIBKS17evTBjQ&usqp=CAU" alt=""/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3SdavxjQJO-FdTlOEjQuLS45Obb18tyBj-mdf024aLeKkw4J14XZtVZFYGAjPtZLp60&usqp=CAU" alt=""/>
        </div>
      </div>
      <div className="messages-area">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.from === 'me' ? 'message-me' : 'message-user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chats;
