import React from 'react'
import CourseCard from './CourseCard'
import CoursesContainerCSS from './styles/CoursesContainer.module.css'
import {Link} from "react-router-dom"
function CoursesContainer(props) {
  return (
    <div id={CoursesContainerCSS.courses}>
    {props.courses.map((course)=>{
        return (
        <Link to = "/course">
          <CourseCard {...course} key = {`${course.cat}${course.id}`}></CourseCard>
        </Link>
        )
    })}
</div>
  )
}

export default CoursesContainer