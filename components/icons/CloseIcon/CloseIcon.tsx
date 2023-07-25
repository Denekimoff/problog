import React from 'react'

interface CloseIconProps {
  className: string
}

const CloseIcon = ({ className }: CloseIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="currentColor"
    >
      <path d="M10.8036 3.88544L3.81301 11.0089" stroke="currentColor" />
      <path d="M3.81311 3.88544L10.8037 11.0089" stroke="currentColor" />
    </svg>
  )
}

export default CloseIcon
