import React from 'react'
type props = {
  children: React.ReactNode
}

export default function Container ({ children } : props) {
  return <div className="container main-container px-20">
    {children}
    <style jsx>{`
      .main-container {
        width: 40rem;
      }
    `}</style>
  </div>
}
