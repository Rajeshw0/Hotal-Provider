import React from 'react'
import './SearchPage.css';
import {Button} from "@mui/material";
import SearchResult from './SearchResult';
import SearchPageData from './SearchPageData';
function SearchPage() {
  return (
    <div className="searchPage">
         <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {
                SearchPageData.map((val,ind)=>{
                return(
                <SearchResult
                img={val.img}
                location={val.location}
                title={val.title}
                description={val.description}
                star={val.star}
                price={val.price}
                total={val.total}
                key = {ind}s
            />
                )
                })
            }
            
    </div>
  )
}

export default SearchPage;