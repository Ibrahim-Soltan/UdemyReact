import './App.css';

import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/course/" element={<CoursePage />}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
