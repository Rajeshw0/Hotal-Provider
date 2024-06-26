import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import city from "./City";


import Logo from "./Logo/Hotel.png";

function Header(props) {
  


  return (
    <div className='header'>
        <Link to = "/"> 
        <img className='header_icon' src = {Logo} alt="" />
        </Link>
      <div className = "links">
         <Link to = "/"> 
          Homes
        </Link> 
        <Link to = "/Restaurant"> 
        Restaurant
        </Link>
        <Link to = "/resthome"> 
        RestaurantHome
        </Link>
        
      </div>
       
      

        <div className="header__right">
        <div className="search-box">
        <button className="btn-search"> 

        <SearchIcon/>
        </button>
        <input type="text" className="input-search" placeholder=" Search..."/>
       </div>
            <p>Become a host</p>
            <div className = "globel_icon">
                <LanguageIcon/>
            </div>
      
    <select name="hname" id="" onChange={props.handleChange}>
    <option value="">all</option>
    {
      city.map((el,i)=>{
        return(
          <option value={el.label} key  = {i}>{el.label}</option>
        )
      })
    }
    </select>

    {/* <Autocomplete 
      id="country-select-demo"
      sx={{ width: 300 }}
      options={city}
      onChange = {props.handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select City"
          inputProps={{
            ...params.inputProps // disable autocomplete and autofill
          }}
        />
      )}
    />  */}
    <div className = "avatar">
      <Avatar/>
    </div>
    <Link to = "/carthome"> 
    <div className = "cart">
      <i className="fa-solid fa-cart-shopping"></i>
      <span className='num'>{props.count}</span>
    </div>
    </Link>
        </div>
       
    </div>
  )
}

export default Header;