import React from 'react'
import {useLocation} from "react-router-dom"
function CoursePage() {
  const courseInfo = useLocation().state.Info;
  return (
    <div>
        <h1>{courseInfo.title}</h1>
    </div>
  )
}

export default CoursePage