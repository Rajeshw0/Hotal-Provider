import React from 'react';
import './Home.css';
import Banner from "./Banner";
import Card from './Card';
import Grid from '@mui/material/Grid';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CData from './CityData';
import ProductList from './ProductList';
import ProductListData from "./ProductListData";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

function Home(props) {
    const settings = {
      infinite: true,
      draggAble: true,
      swipeAble: true,
      customTransition: "all ease 3s",
      transitionDuration: 0,
      showDots: false,
      emulateTouch: true,
      autoPlay: false,
      autoPlaySpeed : 3000,
      responsive: {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      }
      };

    return (
        <div id = "home_1"className='home section'>
            <Banner/>
            <div className='home__section'>
                <div className="heading">
                <Grid item xs={12} md={12} sx={{ mb: '4rem' }}>
                    <h1>Our <mark> Restaurant </mark></h1>
                </Grid>
                  </div>  
                
                <Carousel {...settings}>
                    {
                        props.cData.map((val, ind) => {
                            return (
                                <Link to ={`/item/${val.item_id}`} key={ind}>
                                     <Card src={val.src} title={val.title} description={val.description}  />
                                </Link>
                               
                            )
                        })
                    }
                </Carousel>
                <Button variant="contained" href="#outlined-buttons">
                        Learn More
                    </Button>
            </div>

            <div className='home__section_2 section'>
                <div className="heading">
                <Grid item xs={12} md={12} sx={{ mb: '4rem' }}>
                    <h1>Our <mark> Cities </mark></h1>
                </Grid>
                  </div>  
                
                <Carousel {...settings}>
                    {
                        CData.map((val, ind) => {
                            return (
                                <Card src={val.src} title={val.title} description={val.description}  key={ind} />
                            )
                        })
                    }
                </Carousel>


                <Button variant="contained" href="#outlined-buttons">
                        Learn More
                    </Button>
            </div>
            <div className='home__section_3 section'>
                <div className="heading">
                <Grid item xs={12} md={12} sx={{ mb: '4rem' }}>
                    <h1>Our <mark> Menues </mark></h1>
                </Grid>
                  </div>  
                  <Grid container spacing = {4}>
                    {
                        ProductListData.map((val, ind) => {
                            return (
                                <ProductList src={val.src} title={val.title} description={val.description} key={ind} cutprice = {val.cutprice} price = {val.price}/>
                            )
                        })
                    }
                </Grid>
            </div>
            </div>
    )
}

export default Home