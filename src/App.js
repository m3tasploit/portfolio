import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import classes from './App.module.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'

const App = () => {
  const time = useRef(1)
  const [page, setPage] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      time.current = 0
    }, 2000)
  }, [])

  const wrapperRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()

  const checkInView = elt => {
    let eltRect = elt.current.getBoundingClientRect()
    let wrapperRect = wrapperRef.current.getBoundingClientRect()

    let eltTop = eltRect.top - wrapperRect.top

    return eltTop >= 0 && eltTop <= window.innerHeight / 2
  }

  const handleScroll = () => {
    if (checkInView(homeRef)) setPage(0)
    if (checkInView(aboutRef)) setPage(1)
    if (checkInView(portfolioRef)) setPage(2)
    if (checkInView(contactRef)) setPage(3)
  }

  return (
    <div className={classes.App}>
      <Navbar page={page} />
      <div className={classes.wrapper} ref={wrapperRef} onScroll={handleScroll}>
        <div style={{ minHeight: '100%' }} id="home" ref={homeRef}>
          {page === 0 && <Home time={time.current} />}
        </div>

        <div style={{ minHeight: '100%' }} id="about" ref={aboutRef}>
          {page === 1 && <About />}
        </div>

        <div style={{ minHeight: '100%' }} id="portfolio" ref={portfolioRef}>
          {page === 2 && <Portfolio />}
        </div>

        <div style={{ minHeight: '100%' }} id="contact" ref={contactRef}>
          {page === 3 && <Contact />}
        </div>
      </div>
    </div>
  )
}

export default App
