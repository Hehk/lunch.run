import Baseline from '../components/baseline'
import React from 'react'

type props = {
  children: React.ReactNode
}

export default function H2 ({children} : props) {
  return <h2 className="font-mono text-3xl leading-8 py-4 h2-baseline">
    {children}
    <Baseline cls='h2' top={6} />
  </h2>
}
