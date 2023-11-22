import React, { useRef } from 'react'
import classes from './Portfolio.module.css'
import { animated, useSpring, useChain, config } from 'react-spring'

const Portfolio = () => {
  //springs and refs
  const l1ref = useRef()
  const l2ref = useRef()
  const l3ref = useRef()
  const l4ref = useRef()
  const l5ref = useRef()

  const l1Spring = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    ref: l1ref,
  })
  const l2Spring = useSpring({
    from: { transform: 'translateX(-50px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
    ref: l2ref,
  })

  useChain([l1ref, l2ref], [0, 0.2])
  
  return (
    <div className={classes.container}>
      <animated.h1 className={classes.header} style={l1Spring}>
        See my{' '}
        <animated.span className={classes.green} style={l2Spring}>
          works
        </animated.span>
      </animated.h1>
      <div>portfolio</div>
    </div>
  )
}

export default Portfolio
