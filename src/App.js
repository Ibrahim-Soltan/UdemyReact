import './App.css';
import {courses, messages, descs, categories} from "./coursesDB.js"
import Category from './components/Category';
import CategoryList from './components/CategoryList';
function App() {
  console.log(messages["python"]);
  return (
    <div className="App">
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
    </div>
    
  );
}

export default App;
