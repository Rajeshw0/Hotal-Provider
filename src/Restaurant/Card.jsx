import React from 'react';
import "./Card.css";

import Grid from '@mui/material/Grid';

function Card(props) {
  return (
    <Grid item xs={12} md={4}>
    <div className='card' >
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h3>{props.price}</h3>
            </div>
        </div>
        </Grid>
  )
}

export default Card