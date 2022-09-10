import React from 'react'
import CourseCardCSS from "./styles/CourseCard.module.css"
import StarRating from './StarRating'

function CourseCard(props) {
  const getInstructorsNames = (instructorsNames,instructor,idx)=>idx===0?instructor.name:instructorsNames +", "+instructor.name;
  
  return (
        <div className={CourseCardCSS.course}>
        <img src={props.img} alt="course banner" />
        <h4 className={CourseCardCSS.courseName}>
            {props.title}
        </h4>
        <h5 className={CourseCardCSS.instructor}>{props.instructors.reduce(getInstructorsNames,"")}</h5>
        <StarRating rating = {props.rating} users = {props.totalreviews}></StarRating>

        <div>
            <span className={CourseCardCSS.price}>{`E£${props.price}`}</span>
            <span className={CourseCardCSS.oldPrice}>{`E£${props.oldprice}`}</span>
        </div>
        </div>
  )
}

export default CourseCard