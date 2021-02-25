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
  console.log(chat, username, messages);

  return (
    <div>
      ChatFeed
      <MessageForm />
      <MyMessage />
      <TheirMessage />
    </div>
  );
}
