import React from 'react'
import CourseCard from './CourseCard'
import CoursesContainerCSS from './styles/CoursesContainer.module.css'
function CoursesContainer(props) {
  return (
    <div id={CoursesContainerCSS.courses}>
    {props.courses.map((course)=>{
        return <CourseCard {...course}></CourseCard>
    })}
</div>
  )
}

export default CoursesContainer