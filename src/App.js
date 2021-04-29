import './App.css';
import {useState} from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleClick() {
    setMessages(messages => [...messages, message]);
    // TODO: Send a request to server
    setMessage('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="App">
      <input value={message} onChange={onMessageChange} onKeyDown={handleKeyDown}></input>
      <button className="SendButton" onClick={handleClick}>Send</button>
      {messages.map(message => <div>{message}</div>)}
    </div>
  );
}

export default App;
