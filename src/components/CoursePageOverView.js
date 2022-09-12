import React from 'react'
import OverViewCSS from "./styles/CoursePageOverView.module.css"

function CoursePageOverView(props) {
    function listLearnItems(items){
        const list = [];
        for(let i =0;i<items.length;i++){
            list.push(<li key={items[i].id}>{`✓  ${items[i].text}`}</li>)
        }
        return list;
    }
  return (
    <div className={OverViewCSS.container}>
        <h2>What you'll learn</h2>
        <ul className={OverViewCSS.learnitems}>
            {/*TODO: Add tick icons before  list items*/}
            {listLearnItems(props.learnitems)}
        </ul>
    </div>
  )
}

export default CoursePageOverView