import React from "react";
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import MyPortfolio from "./Pages/MyPortfolio";
import AboutMe from "./Pages/AboutMe";
import MySkills from "./Pages/MySkills";
import Footer from "./Pages/Footer";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/MyPortfolio"
            element={<MyPortfolio />}
          />
          <Route 
            path="/AboutMe"
            element={<AboutMe />}
          />
          <Route 
            path="/MySkills"
            element={<MySkills/>}
          />
          <Route 
            path="/ContactMe"
            element={<ContactMe/>}
          />
          
          {/* <Route 
            path="/" 
            element={<Login />} 
          />
          <Route 
            path="/signup" 
            element={<Signup />} 
          /> */}
        </Routes>
      </div>
      <Footer></Footer>

    </BrowserRouter>
  </div>
  );
}

export default App;
