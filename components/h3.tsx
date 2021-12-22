import React from "react"

type props = {
  children: React.ReactNode
}

export default function H3({ children }: props) {
  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          font-size: 1rem;
        }
      `}</style>
    </h3>
  )
}
