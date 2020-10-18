import React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Figcaption({ children }) {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  })

  return (
    <figcaption ref={ref}>
      <motion.div animate={{ opacity: inView ? 1 : 0 }}>{children}</motion.div>
    </figcaption>
  )
}
