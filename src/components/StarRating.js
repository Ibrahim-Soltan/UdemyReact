import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import StarRatingCSS from "./styles/StarRating.module.css"
function StarRating(props) {
    const starRating = (stars)=>{
        const iconList = [];
        for(let i=0;i<Math.floor(stars);i++)iconList.push(<FontAwesomeIcon key = {i} icon={faStar} />);
        return iconList;
    }
  return (
    <div className={StarRatingCSS.rating}>
        {props.rating}
        {starRating(props.rating)}
        <span className={StarRatingCSS.users}>({props.users})</span>
    </div>
  )
}

export default StarRating