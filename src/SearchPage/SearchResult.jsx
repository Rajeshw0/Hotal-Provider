import { FavoriteBorderOutlined, StarBorderOutlined } from '@mui/icons-material'
import React from 'react'
import "./SearchResult.css"
function SearchResult(props) {
    return (
        <div className='searchResult'>
            <img src={props.img} alt={props.img} />
            <FavoriteBorderOutlined className='searchResult__heart' />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>____</p>
                    <p>{props.description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarBorderOutlined className='searchResult__star' />
                        <p>
                            <strong>
                                {props.star}
                            </strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                        <h2>
                            {props.price}
                        </h2>
                        <p>
                            {props.total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult