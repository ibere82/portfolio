import React from 'react'

export default function MenuItem({ label, href }) {
  return (
    <a
      title={label}
      href={href}
    >
      {label}
    </a>
  )
}
