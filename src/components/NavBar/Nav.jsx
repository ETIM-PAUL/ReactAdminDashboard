import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

export const Nav = ({ ...props }) => {

  const { dotColor, color, title, customFunction, icon } = { ...props }
  return (
    <TooltipComponent>
      <button className="relative text-xl rounded-full p-3 hover:bg-light-gray" style={{ color }} onClick={customFunction}>
        <span style={{ backgroundColor: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
        {icon}
      </button>
    </TooltipComponent>
  )
}

