import './App.css';
import React, { useEffect, useState } from "react";
import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import SearchPage from './pages/SearchPage';
function App() {
  const [Post, setPost] = useState();
  const [Error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setPost(json);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Failed to load Courses");
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage data={Post} Error = {Error} IsLoading = {IsLoading}/>}></Route>
          <Route path="/course/" element={<CoursePage />}></Route>
          <Route path="/search/" element={<SearchPage data={Post} Error = {Error} IsLoading = {IsLoading}/>}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
