import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <section className="mx-auto mt-12 max-w-4xl bg-gray-50 shadow-lg">
    <div className="bar h-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-md" />
    {children}
  </section>
);

export default Container;
