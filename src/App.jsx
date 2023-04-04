import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Qualification from './components/qualification/Qualification'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
        <Header />
        <Nav />
        <About />
        <Qualification />
        <Experience />
        <Portfolio />
        <Project />
        <Contact />
        <Footer />
      </>
  )
}
export default App