"use client";

const InnerLayout = ({ children }) => {
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
