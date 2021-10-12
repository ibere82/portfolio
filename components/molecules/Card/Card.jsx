import React from 'react';
import css from './card.module.css';

export default function Card({ title, description, page }) {

  return (

    <div className={css.card}  >
     
      <a href={`portfolio/${page}`}>
        <img src={`/jobs/${page}.png`} alt="" style={{ maxHeight: '200px', maxWidth: '300px', minHeight: '200px', minWidth: '300px', padding: '2px', marginLeft: 'auto', marginRight: 'auto' }} />
        <div className={css.title}>
          <span  style={{ fontSize: '1.3em' }}>{title}</span>
        </div>

        <div className={css.content}>
          <p>{description} </p>
        </div>

        <div className="card-action">
        </div>
      </a>
    </div>
  );
};
