import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import img from "../assets/python/course1.jpg"
import CourseCardCSS from "./styles/CourseCard.module.css"

function CourseCard(props) {

    const starRating = (stars)=>{
        const iconList = [];
        for(let i=0;i<Math.floor(stars);i++)iconList.push(<FontAwesomeIcon key = {i} icon={faStar} />);
        return iconList;
    }
  return (
        <div className={CourseCardCSS.course}>
        <img src={img} alt="course banner" />
        <h4 className={CourseCardCSS.courseName}>
            {props.name}
        </h4>
        <h5 className={CourseCardCSS.instructor}>{props.instructor}</h5>
        <div className={CourseCardCSS.rating}>
            {props.rating}
            {starRating(props.rating)}
            <span className={CourseCardCSS.users}>({props.users})</span>
        </div>
        <div>
            <span className={CourseCardCSS.price}>{`E£${props.price}`}</span>
            <span className={CourseCardCSS.oldPrice}>{`E£${props.oldPrice}`}</span>
        </div>
        </div>
  )
}

export default CourseCard