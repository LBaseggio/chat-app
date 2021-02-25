import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

export default function ChatFeed(props) {
  // console.log(props);
  const { } = props;
  return (
    <div>
      ChatFeed
      <MessageForm /> 
      <MyMessage />
      <TheirMessage/>
    </div>
  )
}