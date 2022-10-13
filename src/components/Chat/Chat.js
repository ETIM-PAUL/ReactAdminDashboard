import React, { memo } from 'react'

const Chat = () => {
  return (
    <div>
      Chater
    </div>
  )
}

const ChatMemo = memo(Chat)
export { ChatMemo as Chat }