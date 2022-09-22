import React from 'react'
import StarRatingCSS from "./styles/StarRating.module.css"
function StarRating(props) {
    const starRating = (stars)=>{
        const iconList = [];
        for(let i=0;i<Math.floor(stars);i++)iconList.push(<i className="fa fa-star" key ={i} aria-hidden="true"></i>);
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