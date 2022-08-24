import './App.css';
import CourseCard from './components/CourseCard';
import {courses} from "./coursesDB.js"

function App() {
  return (
    <div className="App">
      <CourseCard {...courses["python"][0]}></CourseCard>
    </div>
  );
}

export default App;
