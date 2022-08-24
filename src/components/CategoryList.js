import React from 'react'
import CategoryListCSS from "./styles/CategoryList.module.css"
function CategoryList(props) {
  return (
    <ul id={CategoryListCSS.categoriesList}>{props.categories.map((categoryName,index)=>{
        return <li key = {categoryName} className={CategoryListCSS.categoriesListItem}>{categoryName}</li>
    })}</ul>
  )
}

export default CategoryList