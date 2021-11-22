import React from "react";
import styles from "../styles/baseline.module.css";

type props = {
  children: React.ReactNode;
};

export default function H3({ children }: props) {
  return (
    <h3 className={styles.h3 + " font-mono text-2xl pb-4 capitalize"}>
      {children}
    </h3>
  );
}
