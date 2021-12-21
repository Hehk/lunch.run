import React from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children }: props) {
  return (
    <span>
      {children}
    </span>
  );
}
