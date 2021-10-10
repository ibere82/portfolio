import React from 'react';
import css from './card.module.css';

export default function Card({ title, description, src }) {

  return (
    <div className={css.card}  >
      <img src="/icons/card.png" alt="" style={{maxHeight: '80px', maxWidth: '300px'}}/>
      <div className="card-content">
        <span className="card-title " style={{ fontSize: '1.3em' }}>{title}</span>
      </div>

      <div className={"card-content"}>
        <p>{description} </p>  
      </div>

      <div className="card-action">
        <a href={src}>link</a>
      </div>
    </div>
  );
};
