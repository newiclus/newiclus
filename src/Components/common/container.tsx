import React, { PropsWithChildren } from "react";

const bgPatternClasses = `
  before:z-0
  before:absolute before:w-full before:h-full before:top-0 before:left-0 before:opacity-20
  before:bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
`.trim();

const containerClasses = `
  container relative mx-auto my-15 max-w-4xl bg-gray-50 shadow-[-10px_10px_1px_rgba(0,0,0,0.7)]
  ${bgPatternClasses}
`.trim();

const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <section className={containerClasses}>
    <div className="bar h-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-md" />
    {children}
  </section>
);

export default Container;
