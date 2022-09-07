import React from 'react'
import {courses, messages, descs, categories} from "../coursesDB"
import Category from '../components/Category';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';

function HomePage() {
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
        <CategoryList categories = {categories}></CategoryList>
        <Category courses = {courses["python"]} categoryName={"python"} message={messages["python"]} desc = {descs["python"]}></Category>
      </section>
    </main>
  </>
  )
}

export default HomePage