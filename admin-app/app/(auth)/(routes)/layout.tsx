import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full flex justify-center items-center min-h-full">
      {children}
    </div>
  )
}

export default layout