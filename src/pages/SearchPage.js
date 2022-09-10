import Category from '../components/Category';
import Header from '../components/Header';
import LoadingSpinner from "../components/LoadingSpinner"
import React from 'react'
import {useSearchParams} from "react-router-dom"

function SearchPage(props) {
  
  const [searchQuery] =  useSearchParams();
  const searchkeywords = searchQuery.get("search");
  const {Error, data} = props;
  

  const filter = (targetKeyWords, courseKeywords)=>{
    // The filer function return the number of matching words between the search keywords and the course title.
    let similarity = 0;
    for(let i of targetKeyWords){
        for (let j of courseKeywords){
            if(i.includes(j) || j.includes(i)) similarity++;
        }
    }
    return similarity;
}

const searching = (courses,searchkeywords)=>{
  let keywords = searchkeywords.toLowerCase();
  keywords = keywords.split(" ");

  // targetCourses stores courses that match the search keywords.
  const targetCourses = []
  for(let catName in courses){
      let cat = courses[catName];
      for(let course of cat){
          
          let courseName = course.title.toLowerCase();
          
          courseName = courseName.split(" ");
          
          const similarity = filter(keywords, courseName);
          course.rank = similarity;
          if(similarity>0)targetCourses.push(course);
      }
  }
  // Sort the targetCourse based on similarity to target keywords.
  targetCourses.sort((a, b) => {
      return b.rank - a.rank;
  });

  return targetCourses;
  
}
const renderFetchedData =() =>{
  if(data){
    const courses = data["courses"];
    return(
      <>
          <Category courses = {searching(courses,searchkeywords)} categoryName={"search"}></Category>
      </>
    )
  }
  else if(Error){
    return <h1>{Error}</h1>
  }
  else {
    return <LoadingSpinner />
  }
}

  return (
    <>
      <Header />
      <main>
      <section>
        <h2>A broad selection of courses</h2>
        <p>
            Choose from 185,000 online video courses with new additions published
            every month
        </p>
        {renderFetchedData()}
      </section>
    </main>
    
  </>
  )
}

export default SearchPage