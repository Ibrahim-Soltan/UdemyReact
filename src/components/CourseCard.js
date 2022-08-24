import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import img from "../assets/python/course1.jpg"

function CourseCard(props) {
  return (
    <div className="courses">
        <div className="course">
        <img src={img} alt="course banner" />
        <h4 className="courseName">
            {props.name}
        </h4>
        <h5 className="instructor">{props.instructor}</h5>
        <div className="rating">
            {props.rating}
            <span className="users">({props.users})</span>
        </div>
        <div>
            <span className="price">{`E£${props.price}`}</span>
            <span className="oldPrice">{`E£${props.oldPrice}`}</span>
        </div>
        </div>
    </div>

  )
}

export default CourseCard