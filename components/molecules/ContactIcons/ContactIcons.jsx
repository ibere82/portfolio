import React from 'react'
import css from './contactIcons.module.css';
import Icon from '../../atoms/Icon';

export default function ContactIcons({withLabel}) {
  return (
    <div className={css.iconsContainer}>

      <Icon
        style={withLabel ? {display: 'flex', alignItems:'center'} : {}}
        title="Iberê' s linkedin page"
        href='https://www.linkedin.com/in/iber%C3%AA-abondanza-kuhlmann-0691b32a/'
        label={withLabel ? "Linkedin" : ''}
        iconSrc="/icons/linkedin.png"
        newTab
      />

      <Icon
        style={withLabel ? {display: 'flex', alignItems:'center'} : {}}
        title="Iberê' s github page"
        href='https://github.com/ibere82'
        label={withLabel ? "Github" : ''}
        iconSrc="/icons/github.png"
        newTab
      />
      
    </div>
  )
}
