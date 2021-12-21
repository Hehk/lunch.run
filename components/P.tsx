import React from "react";

export default function P ({ children } : { children : React.ReactNode }) {
  return <p>
    {children}
    <style jsx>{`
      p {
        margin-top: 0;
      }
    `}</style>
  </p>  
}