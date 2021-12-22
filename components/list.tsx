import React from "react"

export default function List({ children }: { children: React.ReactNode }) {
  return (
    <ul>
      {children}
      <style jsx>{`
        ul {
          padding-left: 1.5rem;
        }
      `}</style>
    </ul>
  )
}
