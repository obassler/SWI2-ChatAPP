import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Message {
  id: number;
  content: string;
  sender: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      content: newMessage,
      sender: 'You',
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>ChatApp</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <p className="no-messages">No messages yet. Start a conversation!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="message">
              <span className="message-sender">{msg.sender}</span>
              <p className="message-content">{msg.content}</p>
              <span className="message-time">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          ))
        )}
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
