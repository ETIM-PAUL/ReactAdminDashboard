import React, { memo } from 'react'

const Footer = () => {
  return (
    <p className="dark:text-gray-200 text-gray-700 text-center">HosPiD ©2022 Terms and Conditions apply.</p>
  )
}

const FooterMemo = memo(Footer)
export { FooterMemo as Footer }