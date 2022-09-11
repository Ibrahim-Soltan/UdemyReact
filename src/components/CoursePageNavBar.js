import React from 'react'
import NavCSS from "./styles/CoursePageNavBar.module.css"
function CoursePageNavBar() {
  return (
    <div className={NavCSS.container}>
        <ul className={NavCSS.nav}>
            <li>Overview</li>
            <li>Curriculum</li>
            <li>Instructor</li>
            <li>Reviews</li>
        </ul>
    </div>

  )
}

export default CoursePageNavBar