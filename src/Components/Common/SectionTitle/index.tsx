import React, { JSX } from "react";

interface ISection {
  name: string;
}

function SectionTitle({ name }: ISection): JSX.Element {
  return (
    <div>
      <h2>{name}</h2>
      <span />
    </div>
  );
}

export default SectionTitle;
