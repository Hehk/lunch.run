import React from 'react'
import styles from '../styles/global.module.css'
import cls from '../util/cls'
type props = {
  children: React.ReactNode
}

export default function Container ({ children } : props) {
  return <div className={cls(styles.container, "container px-4 md:px-20")}>
    {children}
  </div>
}
