import React from "react";

type props = {
  children: React.ReactNode;
};

export default function Container({ children }: props) {
  return (
    <div>
      {children}
    </div>
  );
}
