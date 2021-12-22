import React from "react"

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}
