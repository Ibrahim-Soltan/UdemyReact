import React from 'react'
import {useLocation} from "react-router-dom"
import FloatingCourseCard from '../components/FloatingCourseCard';
function CoursePage() {
  const courseInfo = useLocation().state.Info;
  return (
    <div>
        <FloatingCourseCard {... courseInfo}/>
    </div>
  )
}

export default CoursePage