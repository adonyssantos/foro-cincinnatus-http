import { useEffect, useState } from 'react';
import { sendMessage, messageSuscribe, messageUnsubscribe } from '../services/ws';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    messageSuscribe(message => {
      setMessages(messages => [...messages, message]);
    });

    return () => {
      messageUnsubscribe();
    };
  }, []);

  function handleSubmit(event) {
    const input = event.target.message;
    const text = input.value;

    event.preventDefault();
    input.value = '';
    input.focus();

    sendMessage(text);
    setMessages(messages => [...messages, text]);
  }

  return (
    <div className='chat-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='message'>Message:</label>
        <input type='text' placeholder='Enter your message' id='message' name='message' required />
        <button type='submit'>Send</button>
      </form>
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
