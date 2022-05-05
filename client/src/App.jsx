import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

require("dotenv").config();

const cookies = new Cookies();

const apiKey = process.env.STREAM_API_KEY;
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    id: cookies.get('userId'),
    phoneNumber: cookies.get('phoneNumber'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
    </div>
  )
}

export default App