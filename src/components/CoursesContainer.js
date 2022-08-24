import React from 'react'
import CourseCard from './CourseCard'
function CoursesContainer(props) {
  return (
    <div class="courses">
    {props.courses.map((course)=>{
        return <CourseCard {...course}></CourseCard>
    })}
</div>
  )
}

export default CoursesContainer