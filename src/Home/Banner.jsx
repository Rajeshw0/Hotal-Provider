import './Banner.css';
import Button from '@mui/material/Button';
import React from 'react';
// import Search from './Search';
import { useNavigate } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



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
                <ImageList cols={3}>
                <ImageListItem><img src="https://angfuzsoft.com/html/pizzer/demo/assets/img/menu/menu_rest_1_1.png" alt = "img"/></ImageListItem>
                <ImageListItem><img src="https://angfuzsoft.com/html/pizzer/demo/assets/img/menu/menu_rest_1_3.png" alt = "img"/></ImageListItem>
                <ImageListItem><img src="https://angfuzsoft.com/html/pizzer/demo/assets/img/menu/menu_rest_1_2.png" alt = "img"/></ImageListItem>
                </ImageList>
                <div className="info_content">
                    <h2>Get out of stretch your imagination</h2>
                    <p>
                        plan  a different kind of gateway to uncover the hidden gems near you.
                    </p>
                    <Button onClick={() => history('/search')} variant="outlined">Explore  Nearby</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner