import React from "react";
import cls from "../util/cls";

type props = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: props) {
  return (
    <span>
      {children}
    </span>
  );
}
