import React from 'react'
import HeaderCSS from "./styles/CoursePageHeader.module.css"
import getInstructorsNames from "./util/instructorsNames.js"

function CoursePageHeader(props) {


  return (
    <div className={HeaderCSS.container}>
        <div className={HeaderCSS.header}>
        <h1 className={HeaderCSS.title}>{props.title}</h1>
        <h3 className={HeaderCSS.desc}>{props.description}</h3>
        {/* TODO: Star Rating */}
        <div className={HeaderCSS.rating}>{`${props.rating} (${props.totalreviews} ratings) ${props.enrollments}students`}</div>
        <h4>{`Created by ${props.instructors.reduce(getInstructorsNames,"")}`}</h4>
        <h4>{`Last updated ${props.lastupdated} English English`}</h4>
        </div>
    </div>
  )
}

export default CoursePageHeader