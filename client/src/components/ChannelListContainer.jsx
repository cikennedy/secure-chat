import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import SecureChatIcon from '../assets/secure-chat.png';
import LogOutIcon from '../assets/logout.png';

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={SecureChatIcon} alt="Secure Chat" width="30" />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogOutIcon} alt="Log Out" width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
    </>
  )
}

export default ChannelListContainer