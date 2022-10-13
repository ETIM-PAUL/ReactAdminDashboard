import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft, BsFillBookmarkPlusFill } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdCancel, MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Nav } from './Nav';
import avatar from '../../assets/avatar.jpg';
import { Cart, Chat, Notifications } from './index';
import { useStateContext } from '../../contexts';
import { DropDown } from '../DropMenu/DropDown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { state, dispatch } = useStateContext();
  const { activeMenu, screenSize, dropDown } = state;

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "setScreenSize", payload: (window.innerWidth) })
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch({ type: "setActiveMenu", payload: true })
    } else dispatch({ type: "setActiveMenu", payload: false })
  }, [screenSize]);



  return (
    <>    <div className=" flex justify-between p-2 md:mx-6 relative">
      <Nav title="Menu" customFunction={() => dispatch({ type: "setActiveMenu", payload: !activeMenu })} color="blue" icon={<AiOutlineMenu />} />

      <div className="flex">
      </div>

      <div className="flex gap-2 items-center text-14">
        <Link to="/appointments">
          <Nav title="Appointments" customFunction={() => dispatch({ type: "showDropDown", payload: "" })} color="blue" icon={<BsFillBookmarkPlusFill />} />
        </Link>
        <Nav title="Chats" dotColor="#03C9D7" customFunction={() => dispatch({ type: "showDropDown", payload: "chat" })} color="blue" icon={<BsChatLeft />} />
        <Nav title="Notifications" dotColor="#03C9D7" customFunction={() => dispatch({ type: "showDropDown", payload: "notifications" })} color="blue" icon={<RiNotification3Line />} />
        <img src={avatar} alt="profile" className="rounded-full h-10 w-10 p-2" />
        <span className="text-gray-400 font-bold ml-1">insider_man</span>
        <MdKeyboardArrowDown className="text-gray-400" />
      </div>
    </div>
      {dropDown === "chat" &&
        <DropDown title="Messages" />
      }
      {dropDown === "notifications" &&
        <DropDown title="Notifications" />
      }
    </>

  );
};

export { NavBar };
