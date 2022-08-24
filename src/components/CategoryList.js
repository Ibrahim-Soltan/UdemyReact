import React from 'react'

function CategoryList(props) {
  return (
    <ul>{props.categories.map((categoryName,index)=>{
        return <li key = {categoryName} className={index===0?"acitveCat":"IncativeCat"}>{categoryName}</li>
    })}</ul>
  )
}

export default CategoryList