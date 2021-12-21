import React from "react";

type props = {
  children: React.ReactNode;
};

export default function H2({ children }: props) {
  return (
    <h2>
      {children}
    </h2>
  );
}
