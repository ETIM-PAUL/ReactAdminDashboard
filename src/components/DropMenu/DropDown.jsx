import React, { memo } from 'react'
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { chatData } from '../../assets/FakeData';
import { useStateContext } from '../../contexts';
import { Nav } from '../NavBar/Nav';

const DropDown = ({ title }) => {
  const { dispatch } = useStateContext();

  return (
    <div className="absolute top-16 shadow-2xl w-96 h-fit bg-white dark:bg-main-dark-bg right md:right-4 rounded-3xl" style={{ zIndex: "10000" }}>
      <div className="p-4 relative">
        <div className="flex items-center justify-between">
          <p className="font-bold">{title}</p>
          <Nav color="gray" icon={<MdCancel />} customFunction={() => dispatch({ type: "showDropDown", payload: "" })} />
        </div>
        <div className="my-8">
          {chatData.splice(0, 4).map((item, index) => (
            <div key={index}>
              <div className="flex gap-3 items-center mb-2">
                <img src={item.image} className="rounded-full w-12 h-12" alt="" />
                <div div className="inline-block" >
                  <p className="text-slate-800 dark:text-blue-700 font-semibold text-sm mb-1">{item.message}</p>
                  <p className="text-xs dark:text-blue-200">{item.desc}</p>
                  <p className='text-xs dark:text-blue-200'>{item.time}</p>
                </div>
              </div>
              <div className='mb-2 border-t-1 w-full'></div>
            </div>
          ))}
        </div>
        <Link to={`/${title}`}>
          <button className="justify-center flex bg-[antiquewhite] hover:bg-[bisque] dark:bg-secondary-dark-bg hover:dark:bg-[#54575c] dark:text-[#fff] p-3 rounded-2xl font-bold hover:cursor-pointer cursor-default w-full">See all {title}</button>
        </Link>
      </div>
    </div >
  )
}

const DropDownMemo = memo(DropDown)
export { DropDownMemo as DropDown }