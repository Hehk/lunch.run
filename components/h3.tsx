import Baseline from '../components/baseline'
import React from 'react'

type props = {
  children: React.ReactNode
}

export default function H3 ({children} : props) {
  return <h3 className="font-mono text-2xl pb-4 h3-baseline capitalize">
    {children}
    <Baseline cls='h3' top={8} />
  </h3>
}
