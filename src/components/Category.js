import React from 'react'
import CoursesContainer from './CoursesContainer'

function Category(props) {
  return (
    <div>
        <h3>{props.message}</h3>
        <p>{props.desc}</p>
        <button>{`Explore ${props.categoryName}`}</button>
        <CoursesContainer courses = {props.courses}></CoursesContainer>
    </div>
  )
}

export default Category