import React from 'react'
import {useLocation} from "react-router-dom"
import CoursePageHeader from '../components/CoursePageHeader';
import CoursePageMain from '../components/CoursePageMain';
import CoursePageNavBar from '../components/CoursePageNavBar';
function CoursePage() {
  const courseInfo = useLocation().state.Info;
  return (
    <div>
        <CoursePageHeader {... courseInfo}/>
        <CoursePageNavBar />
        <CoursePageMain {... courseInfo}/>
    </div>
  )
}

export default CoursePage