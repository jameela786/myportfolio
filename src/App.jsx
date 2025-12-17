import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
    <Home />
    <About />
    <Projects />
    <Contact />
  </MainLayout>
  )
}

export default App
