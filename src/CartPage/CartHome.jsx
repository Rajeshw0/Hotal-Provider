import React from 'react';
import './Home.css';
// import "react-multi-carousitemData/lib/styles.css";
import Button from '@mui/material/Button';



function CartHome({ itemData, cartQuantity , deleteCart}) {


    return (
        <div id="carthome_1" className='home section'>
            <div className='home__section'>
                {
                    itemData.map((el, i) => {
                        return (
                            <div className='product' key={i}>
                                <img src={el.img} alt="" />
                                <div className="product__info">
                                    <h5>{el.title}</h5>
                                    <p>{el.description}</p>
                                    <div className="flex-between">
                                        <input type="number" placeholder="1" name={el.item_id} onChange={cartQuantity} className="nitems" value = {el.qty}/>
                                        <div className="flex-end">
                                            <h4>{el.price}</h4>
                                        </div>
                                        <i  
                                            onClick={deleteCart} 
                                            data-id={el.item_id} 
                                            className="far fa-trash-alt">
                                        </i>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex-end">
                    <h3>Total</h3>
                    <h3>= ${itemData.reduce((a, v) => a = a + (v.price * v.qty), 0)}
                    </h3>
                </div>
                <Button variant="contained" href="#outlined-buttons">
                    Place Order
                </Button>
                
            </div>

        </div>
    )
}

export default CartHome;