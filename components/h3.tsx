import React from "react";

type props = {
  children: React.ReactNode;
};

export default function H3({ children }: props) {
  return (
    <h3>
      {children}
    </h3>
  );
}
