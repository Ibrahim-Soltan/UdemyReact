import './App.css';

import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/course/" element={<CoursePage />}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
