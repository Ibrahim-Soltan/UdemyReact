import React from "react";
import Category from '../components/Category';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';

function HomePage(props) {
  const {isLoading, Error, data} = props;
  const rederFetchedData =() =>{
    console.log(isLoading);
    if(data){
      return(
        <>
          <CategoryList categories = {data["categories"]}></CategoryList>
          <Category courses = {data.courses["python"]} categoryName={"python"} message={data.message["python"]} desc = {data.desc["python"]}></Category>
        </>
      )
    }
    else if(Error){
      return <h1>{Error}</h1>
    }
    else {
      //TODO: Add spinner
      return <h1>Loading Courses .....</h1>
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
        {rederFetchedData()}
      </section>
    </main>
  </>
  )
}

export default HomePage