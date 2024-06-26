import './Banner.css';
import Button from '@mui/material/Button';
import React from 'react';
// import Search from './Search';
import { useNavigate } from "react-router-dom";



function Banner() {
    const history = useNavigate();
    //  const[showSearch,setShowSearch] = useState(false)
    return (
        <div className='banner'>
            {/* <div className="banner__search">
            { showSearch && <Search/>  }
                <Button onClick = {()=>setShowSearch(!showSearch)} className='banner_searchButton' variant = "outlined">
                   {showSearch ? "Hide" : "Search Dates" }
                </Button>
            </div> */}
            <div className='banner__info'>
                <div className="info_content">
                    <h1>Shop</h1>
                    <h5>
                        plan  a different kind of gateway to uncover the hidden gems near you.
                    </h5>
                    <Button onClick={() => history('/search')} variant="outlined">Explore  Nearby</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner