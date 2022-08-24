import React from 'react'
import img from "../assets/python/course1.jpg"
import CourseCardCSS from "./styles/CourseCard.module.css"
import StarRating from './StarRating'

function CourseCard(props) {
  return (
        <div className={CourseCardCSS.course}>
        <img src={img} alt="course banner" />
        <h4 className={CourseCardCSS.courseName}>
            {props.name}
        </h4>
        <h5 className={CourseCardCSS.instructor}>{props.instructor}</h5>
        <StarRating rating = {props.rating} users = {props.users}></StarRating>

        <div>
            <span className={CourseCardCSS.price}>{`E£${props.price}`}</span>
            <span className={CourseCardCSS.oldPrice}>{`E£${props.oldPrice}`}</span>
        </div>
        </div>
  )
}

export default CourseCard