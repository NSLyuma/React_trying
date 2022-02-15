import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <div className="navbar__links">
            <a href="/about">About</a>
            <a href="/posts">Posts</a>
          </div>
        </div>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
