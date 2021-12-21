import React from "react";

type props = {
  children: React.ReactNode;
};

export default function H1({ children }: props) {
  return <h1>{children}</h1>;
}
