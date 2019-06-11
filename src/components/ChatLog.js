import React from 'react';
import ChatMessage from './ChatMessage';


function ChatLog(props){
  const mappedMessages = props.messageLogs.map((individualMessage, index) => {
    return (
      <li key={index} className={`chat-entry ${individualMessage.sender === 'Vladimir' ? 'local' : 'remote'}`}>
        <ChatMessage 
          sender = {individualMessage.sender}  
          body = {individualMessage.body}
          timeStamp = {individualMessage.timeStamp}
        />
      </li>
    );
  });

  return(
    <div className="chat-log">
      <ul>
        {mappedMessages}
      </ul>
    </div>
  );
}

export default ChatLog;