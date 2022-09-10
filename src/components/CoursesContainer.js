import React from 'react'
import CourseCard from './CourseCard'
import CoursesContainerCSS from './styles/CoursesContainer.module.css'
import {Link} from "react-router-dom"
function CoursesContainer(props) {

  return (
    <div id={CoursesContainerCSS.courses} >
    {props.courses.map((course)=>{
        return (
          <Link key = {`${course.cat}${course.id}`}
          to = {`/course/${course.title}`}
          state = {{Info: course}}>
            <CourseCard {...course} key = {`${course.cat}${course.id}`} ></CourseCard>
          </Link>
        )
    })}
</div>
  )
}

export default CoursesContainer