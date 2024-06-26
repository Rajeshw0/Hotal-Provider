import React from 'react';
import "./ProductList.css";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function ProductList(props) {
    return (
        <Grid item xs={12} md={6}>
            <div className='product' >
                <img src={props.src} alt="" />
                <div className="product__info">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <h3>${props.price} <span className="line-through">${props.cutprice}</span></h3>
                    <Button variant="contained" href="#outlined-buttons">
                        Order Now
                    </Button>
                </div>
            </div>
        </Grid>
    )
}

export default ProductList