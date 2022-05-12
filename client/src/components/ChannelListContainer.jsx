import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import SecureChatIcon from '../assets/bubble-chat.png';
import LogOutIcon from '../assets/logout.png';

const cookies = new Cookies();

const SideBar = ({ logout }) => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={SecureChatIcon} alt="Secure Chat" width="30" />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogOutIcon} alt="Log Out" width="30" onClick={logout} />
                {/* <img src={LogOutIcon} alt="Log Out" width="30" /> */}
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className='channel-list__header__text'>Pager</p>
    </div>
)

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing }) => {

    const { client } = useChatContext();

    const logout = () => {
        
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('userId');
        cookies.remove('phoneNumber');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');

        window.location.reload();
    }

    return (
        <>
            <SideBar logout={logout}/>
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                    {...previewProps}
                    type="team"
                    />
                )}
                />
                <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="messaging"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview 
                    {...previewProps}
                    type="messaging"
                    />
                )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer