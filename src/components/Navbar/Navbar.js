import React, { useRef } from 'react'
import classes from './Navbar.module.css'
import { useSpring, useChain, animated, config } from 'react-spring'

const Navbar = ({ page }) => {
  const handleClick = e => {
    e.preventDefault()
    let destination = document.querySelector(e.target.hash)
    destination.scrollIntoView({
      behavior: 'smooth',
    })
  }

  //springs and refs for nav links
  const heroRef = useRef()
  const a1ref = useRef()
  const a2ref = useRef()
  const a3ref = useRef()
  const a4ref = useRef()

  const a1Spring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.slow,
    ref: a1ref,
  })
  const a2Spring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.slow,
    ref: a2ref,
  })
  const a3Spring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.slow,
    ref: a3ref,
  })
  const a4Spring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.slow,
    ref: a4ref,
  })
  const heroSpring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: config.slow,
    ref: heroRef,
  })

  useChain([heroRef, a1ref, a2ref, a3ref, a4ref], [0, 0.2, 0.4, 0.6, 0.8])

  return (
    <nav>
      <animated.div className={classes.hero} style={heroSpring}>
        ABDUL MUHAIMIN
      </animated.div>
      <ul>
        <li>
          <animated.a
            href="#home"
            onClick={handleClick}
            style={a1Spring}
            className={page === 0 ? classes.active : null}
          >
            home
          </animated.a>
        </li>
        <li>
          <animated.a
            href="#about"
            onClick={handleClick}
            style={a2Spring}
            className={page === 1 ? classes.active : null}
          >
            about
          </animated.a>
        </li>
        <li>
          <animated.a
            href="#portfolio"
            onClick={handleClick}
            style={a3Spring}
            className={page === 2 ? classes.active : null}
          >
            portfolio
          </animated.a>
        </li>
        <li>
          <animated.a
            href="#contact"
            onClick={handleClick}
            style={a4Spring}
            className={page === 3 ? classes.active : null}
          >
            contact
          </animated.a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
