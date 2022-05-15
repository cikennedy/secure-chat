import React, { useEffect, useState } from 'react';
import { Avatar, useChatChannel } from 'stream-chat-react';

import { InviteIcon } from '../assets';

const ListContainer = ({ children }) => {
    return (
        <div className='user-list__container'>
            <div className='user-list__header'>
                <p>User</p>
                <p>Invite</p>
                {children}
            </div>
        </div>
    )
}

const UserItem = () => {
    return (
        <div className='user-item__wrapper'>
            <div className='user-item__name-wrapper'>
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

  return (
    <ListContainer>UserList</ListContainer>
  )
}

export default UserList