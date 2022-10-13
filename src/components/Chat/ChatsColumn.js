import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { chatData, employeesData } from '../../assets/FakeData'

const ChatsColumn = () => {
  const dotColor = ["green", "red", "yellow"]

  function getRandomColor(dotColor) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * dotColor.length);

    // get random item
    const color = dotColor[randomIndex];

    return color;
  }

  return (
    <div className='px-2 h-screen max-h-[630px] py-4 md:mx-6 my-4 relative bg-white dark:bg-main-dark-bg rounded-3xl overflow-y-scroll'>
      {chatData.map((item, index) => (
        <Link key={index} to={`/message/${item.name}`}>
          <div className="cursor-pointer">
            <div className="flex gap-3 items-center mb-2 hover:bg-gray-500 px-3 py-1 rounded-md ">
              <img src={item.image} className="rounded-full w-12 h-12" />
              <div className='flex justify-between w-full items-center'>
                <div div className="inline-block justify-self-start" >
                  <p className="text-slate-800 dark:text-blue-700 font-semibold text-sm mb-1">{item.name}</p>
                  <p className="text-xs dark:text-blue-200">{item.message}</p>
                  <p className='text-xs dark:text-blue-200'>{item.time}</p>
                </div>
                <span style={{ backgroundColor: getRandomColor(dotColor) }} className=" rounded-full h-2 w-2" />

              </div>

            </div>
            <div className='mb-2 border-t-1 w-full'></div>

          </div>
        </Link>
      ))}
    </div>
  )
}

const ChatsColumnMemo = memo(ChatsColumn)
export { ChatsColumnMemo as ChatsColumn }