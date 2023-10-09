import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Blogs } from './Components/blogs';
import { Bdata } from './Components/bdata';
import Nav from './Components/nav';
import { Footer } from './Components/down';

function App() {
  const [sectionClassName, setSectionClassName] = useState("Obsidian"); // Initialize the section class name
  const changeSectionClassName = (newClassName) => {
    setSectionClassName(newClassName);
  };

  return (
    <Router>
      <div className='App'>
        <section className={sectionClassName} >
          <Nav changeSectionClassName={changeSectionClassName} />
          <Routes>
            <Route exact path="/" element={<Blogs />} />
            <Route exact path="/blog/:id" element={<Bdata />} />
          </Routes>
          <Footer />
        </section>
        <div className='err'>
          <h1>This App is only available for PC and Laptop  Users</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
