import React from "react";
import { ESize } from "../../../Config/_enums";

interface IPicture {
  src: string;
  alt: string;
  size?: ESize;
  circular?: boolean;
}

function Picture({ src, alt, size, circular }: IPicture) {
  const isCircular = circular ? "picture__circular" : "";
  const sizePicture = `picture__size--${size}`;

  return (
    <figure>
      <img alt={alt} src={src} />
    </figure>
  );
}

export { Picture };
