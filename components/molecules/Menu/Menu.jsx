import React from 'react'
import MenuItem from '../../atoms/MenuItem';
import css from './menu.module.css'

export default function Menu() {
  return (
    <ul className={css.menu} >
      <li className={css.menuItem}><MenuItem label="home" href="/" /></li>
      <li className={css.menuItem}><MenuItem label="about" href="/about" /></li>
      <li className={css.menuItem}><MenuItem label="portfolio" href="/portfolio" /></li>
      <li className={css.menuItem}><MenuItem label="contact" href="/contact" /></li>
    </ul>
  )
}
