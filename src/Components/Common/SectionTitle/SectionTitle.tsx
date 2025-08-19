import React from "react";

interface ISection {
  name: string;
}

function SectionTitle({ name }: ISection) {
  return (
    <div>
      <h2>{name}</h2>
      <span />
    </div>
  );
}

export { SectionTitle };
