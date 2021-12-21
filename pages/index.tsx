import React from "react";

type childProps = { children: React.ReactNode }

function P ({children}: childProps) {
  return <p>
    {children}
    <style jsx>{`
      p {
        margin-top: 0;
      }
    `}</style>
  </p>
}

export default function Home() {
  return (
    <>
      <P>Test</P>
      <P>Test</P>
      <P>Test</P>
      <P>Test</P>
    </>
  );
}
