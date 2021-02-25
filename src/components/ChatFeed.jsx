/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

export default function ChatFeed(props) {
  // console.log(props);
  const {
    chats, activeChat, username, messages,
  } = props;
  const chat = chats && chats[activeChat];
  // console.log(chat, username, messages);

  const renderMessages = () => {
    const keys = Object.keys(messages);
    // console.log('keys', keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = imdex === 0 ? null : keys[index - 1];
      const isMyMessage = username === message.sende.username;
      return (
        <div key={`message_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastmessage={message[lastMessageKey]} />
            }
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  if (!chat) return 'Loading...';

  return (
    <div>
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">
            {chat?.title}
          </div>
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}
