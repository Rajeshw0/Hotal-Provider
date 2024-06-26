import React from 'react';
import Grid from '@mui/material/Grid';
import CardData from './CardData';
import Card from './Card';
import "./Restaurant.css"
import { useState } from 'react';
import FilterPrice from './FilterPrice';
import BtnData from './BtnData';
import RatingFilter from './RatingFilter';


function Restaurant() {
  const [activecl, setActivecl] = useState()
  const [active, setActive] = useState({
    name: "",
    price_f: "",
    rating_f:""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    activecl === value ? setActivecl("") : setActivecl(value);
    setActive({ ...active, [name]: value });
    console.log(value)
  }

  

  const cardData = CardData.filter(item => {
    if (active.name !== "" && active.price_f !== "" && active.rating_f !== "") {
      return item.category === active.name && item.price_f === active.price_f && item.rating_f === active.rating_f;
    } else if (active.name !== "" && active.price_f !== "" && active.rating_f === "") {
      return item.category === active.name && item.price_f === active.price_f && item.rating_f !== active.rating_f;
    }
    else if (active.name === "" && active.price_f !== "" && active.rating_f !== "") {
      return item.category !== active.name && item.price_f === active.price_f && item.rating_f === active.rating_f;
    }
    else if (active.name !== "" && active.price_f === "" && active.rating_f !== "") {
      return item.category === active.name && item.price_f !== active.price_f && item.rating_f === active.rating_f;
    }
    else if (active.name === "" && active.price_f === "" && active.rating_f !== "") {
      return item.category !== active.name && item.price_f !== active.price_f && item.rating_f === active.rating_f;
    }
    else if (active.name !== "" && active.price_f === "" && active.rating_f === "") {
      return item.category === active.name && item.price_f !== active.price_f && item.rating_f !== active.rating_f;
    }
    else if (active.name === "" && active.price_f !== "" && active.rating_f === "") {
      return item.category !== active.name && item.price_f === active.price_f && item.rating_f !== active.rating_f;
    }
    else {
      return item.category !== active.name && item.price_f !== active.price_f;
    }
  })





  return (
    <>

      <div className="rest_section">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="side_section">
              <h3>Filter Your Items</h3>
              <hr />
              <div className="filter_field">
                <label>Price</label>

                <select id="price" name="price_f" onChange={handleChange}>
                  <option value="">All</option>
                  {
                    FilterPrice.map((el, i) => {
                      return (
                        <option key={i} value={el.price_f}>{el.label}</option>
                      )
                    })
                  }

                </select>
                <label>Rating</label>
                <select name = "rating_f" onChange={handleChange}>
                  
                  {
                    RatingFilter.map((el, i) =>
                      <option value={el.rating_f} key={i}>
                        {el.label}
                      </option>
                    )
                  }
                </select>
                
              </div>

            </div>
          </Grid>
          <Grid item xs={9}>

            <div className="right_side">
              <div className="btn_group">

                <button className="btn" href="/" onClick={handleChange} value="" name="name">
                  All
                </button>
                {
                  BtnData.map((el, i) =>
                    <button className={`btn ${activecl === el.category && "active"}`} href="/" onClick={handleChange} value={el.category} name="name" key={i}>
                      {el.category}
                    </button>)
                }




              </div>
              <Grid container spacing={0}>
                {
                  cardData.map((val, ind) => {
                    return (
                      <Card src={val.src} title={val.title} description={val.description} key={ind} />
                    )
                  })
                }
              </Grid>
            </div>
          </Grid>

        </Grid>
      </div>

    </>
  )
}

export default Restaurant;