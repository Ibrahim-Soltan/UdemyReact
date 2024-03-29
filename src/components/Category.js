import React from 'react'
import CoursesContainer from './CoursesContainer'
import CategoryCSS from "./styles/Category.module.css"


function Category(props) {
  return (
    <div id={CategoryCSS.category}>
        <h3 id = {CategoryCSS.message}>{props.categoryName==="search"?`${props.courses.length} result(s) found`:props.message}</h3>
        {props.categoryName!=="search" && <p id = {CategoryCSS.desc}>{props.desc}</p>}
        {props.categoryName!=="search" && <button id = {CategoryCSS.explore}>{`Explore ${props.categoryName}`}</button>}
        <CoursesContainer courses = {props.courses}></CoursesContainer>
    </div>
  )
}

export default Category