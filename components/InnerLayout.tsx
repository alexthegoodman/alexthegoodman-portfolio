"use client";

import { ReactNode } from "react";

const InnerLayout = ({ children = <></> }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        p,
        a,
        li,
        span {
          font-family: freight-sans-pro, sans-serif;
        }
      `}</style>
    </>
  );
};

export default InnerLayout;
