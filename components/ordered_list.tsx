import React from "react";

export default function OrderedList ({ children }: {children: React.ReactNode}) {
  return <ol>
    {children}
    <style jsx>{`
      ol {
        padding-left: 2rem;
      }
    `}</style>
  </ol>
}