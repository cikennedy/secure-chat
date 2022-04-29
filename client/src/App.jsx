import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from './components';
import ChannelContainer from './components';

const apiKey = '9dx8sq8u6dh3';

const client = StreamChat.getInstance(apiKey);

const App = () => {
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