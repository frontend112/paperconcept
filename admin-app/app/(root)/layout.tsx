import React, { useState } from 'react'

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout