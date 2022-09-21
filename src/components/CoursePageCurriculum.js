import React from 'react'
import ContentCSS from "./styles/CoursePageCurriculum.module.css"
import Collapsible from './Collapsible.js'

function CoursePageCurriculum(props) {
    function lectures(){
        const list = [];
        for(let i =0;i<props.lectures.length;i++){
            list.push(
                <Collapsible label={props.lectures[i].title} time={props.lectures[i].totalduration} lessons={props.lectures[i].lessons}>
                </Collapsible>  
            );
        }
        return list;
    }

  return (
    <div className={ContentCSS.container}>
        <h2>Course Content</h2>
        {lectures()}
    </div>
  )
}

export default CoursePageCurriculum