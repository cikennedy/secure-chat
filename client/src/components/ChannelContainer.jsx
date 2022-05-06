import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {

  const { channel } = useChatContext();

  if(isCreating) {
    return (
      <div className='channel__container'>
        <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
      </div>
    )
  }

  if(isEditing) {
    return (
      <div className='channel__container'>
        <EditChannel setIsEditing={setIsEditing}/>
      </div>
    )
  }

  const EmptyState = () = (
    <div className='channel-empty__container'>
      <p className='channel-empty__first'>Beginning of chat history: </p>
      <p className='channel-empty__second'>Send messages with links, attachments, etc.!</p>
    </div>
  )

  return (
    <div className='channel__container'>
      <Channel>
        <ChannelInner />
      </Channel>
    </div>
  )
}

export default ChannelContainer