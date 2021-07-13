import React from 'react'
import styles from '../styles/baseline.module.css'

type props = {
  children: React.ReactNode
}

export default function H1 ({children} : props) {
  return <h1 className={styles.h1 + " font-mono text-5xl py-4"}>
    {children}
  </h1>
}
