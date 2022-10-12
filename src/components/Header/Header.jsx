import React, { memo } from 'react'

const Header = ({ ...props }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">
        HosPiD
      </p>
      <div className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[white] bg-main-bg shadow-md dark:bg-secondary-dark-bg w-fit px-4 py-2 mt-2 rounded-md">{props.title}</div>
    </div>
  )
}

const HeaderMemo = memo(Header)
export { HeaderMemo as Header }