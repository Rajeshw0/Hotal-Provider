import React from 'react';
import './RestHome.css';
import Banner from "./Banner";
import Grid from '@mui/material/Grid';
import "react-multi-carousel/lib/styles.css";
import Button from '@mui/material/Button';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardData from '../Home/CardData';

function RestHome({addToCart,valChange,numVal}) {

    const params = useParams();
const cardData = CardData.filter(el => {
        if(params.item_id!=""){
            debugger
            return el.item_id == params.item_id;
            
        }   
})

const [activeSrc , setActiveSrc] = useState(`${cardData[0].src}`);



   const changeSrc = (e)=>{
    setActiveSrc(e.target.currentSrc)
   }
    return (
        <div id="resthome_1" className='home section'>
            <Banner />
            {
                cardData.map((el,i)=>{
                    return(
                       <div className='home__section' key = {i}>
                <Grid container spacing={2} justifyContent="space-around">
                    <Grid item xs={6} className = "gal_imgs">
                        <Grid container spacing={2}>
                            <Grid className = "gallery_image" item xs={11}>
                                <img src={activeSrc } alt="img" />
                            </Grid>
                            <Grid  className = "gallery_image" item xs={3}>
                                <img onClick = {changeSrc} src={el.src1} alt="img" />
                            </Grid>
                            <Grid className = "gallery_image" item xs={3}>
                                <img onClick = {changeSrc}  src={el.src2} alt="brain" />
                            </Grid>
                            <Grid className = "gallery_image" item xs={3}>
                                <img onClick = {changeSrc} src={el.src3} alt="brain" />
                            </Grid>
                            <Grid  className = "gallery_image" item xs={3}>
                                <img onClick = {changeSrc} src={el.src4} alt="brain" />
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item xs={5}>
                        <h2 className="item_title">{el.title}</h2>
                        <h4 className="item_price" >{el.price}<span className = "cross">{el.cutPrice}</span></h4>
                        <p className="description">{el.description}</p>
                        <Grid container alignItems={'center'} justifyContent={"center"} className="checkoutItems" spacing={0}>
                            
                            <Grid item xs={7}>
                                <Button onClick = {()=>addToCart(el)} variant="contained" justifyContent ="center" href="#outlined-buttons">
                                    Add To Cart
                                </Button>
                            </Grid>
                            <Grid container item xs={2}>
                                <FavoriteOutlinedIcon display="flex" justifyContent="flex-start" />
                            </Grid>
                        </Grid>
                        <Grid className = "items_detail" textAlign={'left'} item xs={12} paddingLeft = {"30px"} marginTop = {'40px'}>
                            <p><b>SKU:</b> {el.sku}</p>
                            <p><b>Category:</b>{el.title}</p>
                            <p><b>Tags:</b>{el.tags}</p>
                        </Grid>
                        <Grid container className = "share_item" textAlign={'left'} item xs={12} paddingLeft = {"30px"} marginTop = {'40px'}>
                       
                        <Grid item xs={12} className ="share_icons" marginBottom = {'20px'}>
                         <h4>  Share <i className="fa-solid fa-share"></i></h4>
                        </Grid>
                        <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-youtube"></i>
                        </Grid>
                    </Grid>
                </Grid>


            </div> 
                    )
                })
            }
            


        </div>
    )
}

export default RestHome;