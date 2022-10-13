import React, { memo, useEffect, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { chatData } from '../../assets/FakeData'
import { Nav } from '../NavBar/Nav'

const Chat = () => {

  const [messages, setMessages] = useState(chatData)
  const [message, setMessage] = useState("")
  const [sentMessages, setSentMessages] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const message = messages.filter((message) => message.name === id)
    setMessages(message)
  }, [id])

  const sendMessage = () => {
    const time = new Date()
    const messageObj = {
      message: message,
      time: time.getHours() + ':' + time.getMinutes()
    }
    if (message.length > 0) {
      sentMessages.push(messageObj)
    }
    setMessage("")
  }

  return (
    <div className='px-2  max-h-screen py-4 md:mx-6 my-4 relative bg-white dark:bg-main-dark-bg rounded-3xl overflow-y-scroll'>
      <div className='h-[60vh]'>
        {messages.map((message, index) => (
          <div key={index} className="grid float-left">
            <div className='bg-main-bg dark:bg-gray-500 shadow-md w-fit p-2 rounded-md mb-1 mx-4' >
              <p className='text-sm font-normal dark:text-[white]'>{message.message}</p>
            </div>
            <p className='text-[10px] pl-1 dark:text-[#fff] mb-3 mx-4'>{message.time}</p>
          </div>
        ))}
        <br />
        <br />
        <div className='grid float-right'>
          {sentMessages.map((message, index) => (
            <div key={index} className="grid justify-self-end">
              <div className='bg-main-bg dark:bg-gray-500 shadow-md w-fit p-2 rounded-md mb-1 mx-4 ' >
                <p className='text-sm font-normal dark:text-[white]'>{message.message}</p>
              </div>
              <p className='text-[10px] text-end pl-1 dark:text-[#fff] mb-3 mx-4'>{message.time}</p>
            </div>
          ))}

        </div>

      </div>

      <div className='w-full flex items-center gap-2 rounded-2xl '>
        <input type='text' value={message} className='w-full rounded-2xl p-3 bg-main-bg dark:bg-gray-700' placeholder='Type your message' onChange={(e) => setMessage(e.target.value)} />
        <Nav icon={<AiOutlineSend />} color="blue" customFunction={() => sendMessage()} />
      </div>

    </div>
  )
}

const ChatMemo = memo(Chat)
export { ChatMemo as Chat }