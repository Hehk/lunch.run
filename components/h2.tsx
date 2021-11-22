import React from "react";
import styles from "../styles/baseline.module.css";

type props = {
  children: React.ReactNode;
};

export default function H2({ children }: props) {
  return (
    <h2 className={styles.h2 + " font-mono text-3xl leading-8 py-4"}>
      {children}
    </h2>
  );
}
