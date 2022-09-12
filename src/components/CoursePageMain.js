import React from 'react'
import CoursePageOverView from './CoursePageOverView'
import MainCSS from "./styles/CoursePageMain.module.css"
function CoursePageMain(props) {

  return (
    <div className={MainCSS.main}>
        <CoursePageOverView {... props} />
    </div>
  )
}

export default CoursePageMain