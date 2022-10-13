import React from 'react';
import { MdCancel } from 'react-icons/md';
import { userProfileData } from '../../assets/FakeData';
import avatar from '../../assets/avatar.jpg';
import { Nav } from '../NavBar/Nav';
import { useStateContext } from '../../contexts';
import { Link } from 'react-router-dom';


const UserProfile = ({ title }) => {
  const { dispatch } = useStateContext();

  return (
    <div className="nav-item shadow-2xl absolute right-1 md:right-4 top-16 bg-white dark:bg-[#42464D] p-8 rounded-3xl w-96">
      <div className="flex items-center justify-between">
        <p className="font-bold">{title}</p>
        <Nav color="gray" icon={<MdCancel />} customFunction={() => dispatch({ type: "showDropDown", payload: "" })} />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> insider_man </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> etimpaul22@hospid.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <Link to={`/${item.link}`} key={index} onClick={() => dispatch({ type: "showDropDown", payload: "" })}>
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div> */}
    </div>

  );
};

export { UserProfile };