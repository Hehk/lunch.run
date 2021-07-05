import Baseline from '../components/baseline'
import React from 'react'

type props = {
  children: React.ReactNode
}

export default function H1 ({children} : props) {
  return <h1 className="font-mono text-5xl py-4 h1-baseline">
    {children}
    <Baseline cls='h1' top={7} />
  </h1>
}
