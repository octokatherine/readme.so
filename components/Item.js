import React, { forwardRef } from 'react'

export const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={`bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer ${
        id === props.focusedSectionSlug
          ? 'bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300'
          : ''
      }`}
    >
      <img className="h-5 w-5 mr-2" src="drag.svg" alt />
      <p>{props.name}</p>
    </div>
  )
})
