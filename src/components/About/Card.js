import React, { useState } from 'react'
import classes from './Card.module.css'

import { animated as a, config, useSpring } from 'react-spring'

const Card = ({ children, springRef }) => {
  const [stopped, setStopped] = useState(false)
  const spring = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    ref: springRef,
    onRest: () => setStopped(true),
  })

  const [hoverSpring, set] = useSpring(() => ({ s: 1, config: config.wobbly }))
  const [z, setZ] = useState(0)

  return (
    <a.div
      className={classes.card}
      style={
        stopped
          ? {
              transform: hoverSpring.s.interpolate(v => `scale(${v})`),
              zIndex: z,
            }
          : {
              ...spring,
              zIndex: z,
            }
      }
      onMouseEnter={() => {
        set({ s: 1.15 })
        setZ(1)
      }}
      onMouseLeave={() => {
        set({ s: 1 })
        setZ(0)
      }}
    >
      {children}
    </a.div>
  )
}

export default Card
