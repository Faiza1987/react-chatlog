import React from 'react';
import Timestamp from './Timestamp';

function ChatMessage(props){
  let timeSent = <Timestamp time = {props.timeStamp} />
  return(
    <section className="chat-bubble">
      <li>
        <p className="entry-name">{props.sender}</p>

        <div className="entry-bubble">
          <p className="entry-body">{props.body}</p>
          <p className="entry-time">{timeSent}</p>
        </div>
      </li>
    </section>
  );
}

export default ChatMessage;