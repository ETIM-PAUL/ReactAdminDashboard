import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft, BsFillBookmarkPlusFill } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Nav } from './Nav';
import avatar3 from '../../assets/avatar3.png';
import { useStateContext } from '../../contexts';
import { DropDown } from '../DropMenu/DropDown';
import { Link } from 'react-router-dom';
import { UserProfile } from '../Profile';

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

  }, [dispatch]);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch({ type: "setActiveMenu", payload: true })
    } else dispatch({ type: "setActiveMenu", payload: false })
  }, [screenSize, dispatch]);



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
        <div className='flex items-center gap-1 hover:cursor-pointer'
          onClick={() => dispatch({ type: "showDropDown", payload: "profile" })}>
          <img src={avatar3} alt="profile" className="rounded-full h-10 w-10 p-2" />
          <span className="text-gray-400 font-bold ml-1">insider_man</span>
          <MdKeyboardArrowDown className="text-gray-400 text-2xl" />

        </div>
      </div>
    </div>
      {dropDown === "chat" &&
        <DropDown title="Messages" />
      }
      {dropDown === "notifications" &&
        <DropDown title="Notifications" />
      }
      {dropDown === "profile" &&
        <UserProfile title="My Profile" />
      }
    </>

  );
};

export { NavBar };
