import { useEffect, useState } from 'react'
import './App.css'

export type PrettyMessage = {
  senderName: string;
  text: string;
};

function App() {
  const [newName, setNewName] = useState('');
  const [settingName, setSettingName] = useState(false);
  const [systemMessage, setSystemMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const prettyMessages: PrettyMessage[] = [];

  const name = '';

  const onSubmitNewName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSettingName(false);
    // TODO: call setName reducer

  }

  const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewMessage('');
    // TODO: call SendMessage reducer
  }

  return (
    <div className="App">
      <div className="profile">
        <h1>Stonks</h1>
        {!settingName ? (
          <>
            <p>{name}</p>
            <button onClick={() => {
              setSettingName(true);
              setNewName(name);
            }}>Edit Name</button>
          </>
        ) : (
          <form onSubmit={onSubmitNewName}>
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} />
            <button type="submit">Set Name</button>
          </form>
        )}
      </div>
      <div className="message">
        <h1>Messages</h1>
        {prettyMessages.length < 1 && <p>No messages yet</p>}
        <div>
          {prettyMessages.map((message, index) => (
            <div key={index}>
              <p>{message.senderName}</p>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="system" style={{ whiteSpace: 'pre-wrap' }}>
          <h1>System</h1>
          <div>
            <p>{systemMessage}</p>
          </div>
        </div>
        <div className="new-message">
          <form 
            onSubmit={onMessageSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              margin: '0 auto',
            }}
          >
            <h3>New Message</h3>
            <textarea 
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
