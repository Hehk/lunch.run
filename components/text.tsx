import React from 'react'
import styles from '../styles/baseline.module.css'
import cls from '../util/cls'

type props = {
  children: React.ReactNode
  className?: string
}

export default function Text ({children, className} : props) {
  return <span className={cls(styles.text, "block text-base leading-4", className)}>
    {children}
  </span>
}
