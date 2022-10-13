import React from 'react'
import { ChatsColumn } from '../../components/Chat'

const Chats = () => {
  return (
    <div className="m-2 md:m-10 bg-white dark:bg-main-dark-bg rounded-3xl" >
      <ChatsColumn />
    </div>
  )
}

export { Chats }