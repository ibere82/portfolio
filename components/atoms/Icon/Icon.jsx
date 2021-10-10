import React from 'react'
import css from './icon.module.css'

export default function Icon({ title, label, href, iconSrc, style, newTab }) {
  return (
    <a
      style={style}
      target={newTab ? '_blank' : ''}
      title={title}
      href={href}>

      <img
        className={css.icons}
        style={{ borderRadius: "50%" }}
        src={iconSrc}
        alt={title} />
      {label}
    </a>
  )
}
