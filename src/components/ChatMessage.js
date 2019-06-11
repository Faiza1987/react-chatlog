import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

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

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
}

export default ChatMessage;